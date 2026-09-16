import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { Bubble, Conversations, Prompts, Sender, Welcome } from "@ant-design/x";
import { Alert, App, Avatar, Button, Checkbox, ConfigProvider, Descriptions, Dropdown, Empty, Form, Input, InputNumber, Modal, Select, Slider, Space, Switch, Tag, Tooltip, message } from "antd";
import { ApiOutlined, AppstoreOutlined, BarChartOutlined, BookOutlined, BulbOutlined, CodeOutlined, CommentOutlined, CompassOutlined, DashboardOutlined, DeleteOutlined, DownloadOutlined, DownOutlined, EditOutlined, FilePptOutlined, FolderOutlined, GithubOutlined, GlobalOutlined, LogoutOutlined, MessageOutlined, MoreOutlined, NotificationOutlined, PaperClipOutlined, PlusOutlined, ProjectOutlined, ReadOutlined, RiseOutlined, RobotOutlined, SafetyCertificateOutlined, SearchOutlined, SettingOutlined, StarOutlined, TagsOutlined, TeamOutlined, ThunderboltOutlined, ToolOutlined, UnorderedListOutlined, UserOutlined } from "@ant-design/icons";
import PptxGenJS from "pptxgenjs";
import { modelPresets } from "./config/model-presets.js";

const theme = {
  token: {
    colorPrimary: "#075ee6",
    colorInfo: "#075ee6",
    borderRadius: 8,
    colorText: "#162236",
    colorBorder: "#d5e4f3",
    fontFamily: '-apple-system,BlinkMacSystemFont,"Noto Sans SC","PingFang SC","Microsoft YaHei",sans-serif'
  },
  components: {
    Button: { controlHeight: 32, fontWeight: 700 },
    Select: { controlHeight: 34, fontSize: 14 },
    Modal: { borderRadiusLG: 12 }
  }
};

function normalizeConfiguredModelId(value) {
  return String(value || "").trim().replace(/^Open WebUI\s*\/\s*/i, "");
}

function SettingsModal({ open, onClose }) {
  const [form] = Form.useForm();
  const [saving, setSaving] = useState(false);
  const [configured, setConfigured] = useState(false);
  const [preset, setPreset] = useState("");
  const [connections, setConnections] = useState([]);
  const [connectionId, setConnectionId] = useState("");

  const editConnection = (id, rows = connections) => {
    const selected = rows.find((item) => item.id === id);
    setConnectionId(selected?.id || "");
    setConfigured(Boolean(selected?.hasApiKey));
    setPreset(selected?.preset || "");
    form.setFieldsValue({
      preset: selected?.preset || "",
      baseUrl: selected?.baseUrl || "",
      apiKey: ""
    });
  };

  const loadConnections = async (preferredId = "") => {
    const payload = await window.__WORKBENCH_BRIDGE__.loadModelSettings();
    const data = payload.data || {};
    const rows = Array.isArray(data.connections) ? data.connections : [];
    setConnections(rows);
    editConnection(preferredId || data.defaultConnectionId || rows[0]?.id || "", rows);
    return data;
  };

  useEffect(() => {
    if (!open) return;
    loadConnections().catch((error) => message.error(error.message || "模型配置读取失败"));
  }, [open]);

  const save = async () => {
    const values = await form.validateFields();
    const selectedPreset = modelPresets[values.preset];
    if (!selectedPreset) {
      message.error("请选择模型预设");
      return;
    }
    setSaving(true);
    try {
      const payload = await window.__WORKBENCH_BRIDGE__.saveModelSettings({
        connectionId: connectionId || undefined,
        preset: values.preset,
        baseUrl: values.baseUrl,
        apiKey: values.apiKey || undefined
      });
      const savedId = connectionId || payload.data?.connections?.at(-1)?.id || "";
      await loadConnections(savedId);
      window.dispatchEvent(new CustomEvent("workbench-model-settings-updated", { detail: payload.data }));
      message.success(`已保存模型连接：${selectedPreset.label}`);
    } catch (error) {
      message.error(error.message || "保存失败");
    } finally {
      setSaving(false);
    }
  };

  const applyPreset = (value) => {
    const nextPreset = modelPresets[value];
    setPreset(value);
    if (!nextPreset) return;
    form.setFieldsValue({
      preset: value,
      baseUrl: nextPreset.baseUrl
    });
  };

  const activePreset = modelPresets[preset];
  const startNewConnection = () => {
    setConnectionId("");
    setConfigured(false);
    setPreset("");
    form.resetFields();
  };

  return (
    <Modal centered destroyOnHidden open={open} title="工作台能力设置" okText="保存设置" cancelText="取消" confirmLoading={saving} onOk={save} onCancel={onClose} width={560}>
      <Form form={form} layout="vertical">
        <Form.Item label="已添加的 API / 模型连接">
          <Space.Compact block>
            <Select
              value={connectionId || undefined}
              placeholder={connections.length ? "选择已添加连接" : "暂无连接"}
              options={connections.map((item) => ({
                value: item.id,
                label: `${item.presetLabel || item.provider} / ${item.defaultModel}`
              }))}
              onChange={(value) => editConnection(value)}
            />
            <Button icon={<PlusOutlined />} onClick={startNewConnection}>新增连接</Button>
          </Space.Compact>
        </Form.Item>
        <Form.Item label="模型预设" name="preset" rules={[{ required: true, message: "请选择模型预设" }]}>
          <Select
            placeholder="选择模型预设"
            options={Object.entries(modelPresets).map(([value, item]) => ({ value, label: item.label }))}
            onChange={applyPreset}
          />
        </Form.Item>
        {activePreset && (
          <Alert
            showIcon
            type={preset === "kimi-k3-openrouter" ? "success" : "info"}
            message={activePreset.label}
            description={(
              <span>
                {activePreset.description}{" "}
                <a href={activePreset.keyUrl} target="_blank" rel="noreferrer">获取 API Key</a>
              </span>
            )}
            style={{ marginBottom: 16 }}
          />
        )}
        <Tag color={configured ? "success" : "default"}>{configured ? "密钥已安全保存在服务端" : "尚未配置 API 密钥"}</Tag>
        <div style={{ marginTop: 16 }}>
          <Form.Item label="API 地址" name="baseUrl" rules={[{ required: true, message: "请输入 API 地址" }]}>
            <Input placeholder="选择预设后自动填写，可改为兼容代理地址" />
          </Form.Item>
          <Form.Item label={configured ? "API Key（留空则保持原密钥）" : "API Key"} name="apiKey" rules={configured ? [] : [{ required: true, message: "请输入 API Key" }]}>
            <Input.Password autoComplete="new-password" placeholder="仅发送并保存到本地服务端" />
          </Form.Item>
          <div className="workbench-form-help">保存时自动校验 API，并在系统内部匹配该预设对应的真实模型 ID。</div>
        </div>
      </Form>
    </Modal>
  );
}

function TopbarSettings() {
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState("api");
  const [session, setSession] = useState(window.__WORKBENCH_AUTH_SESSION__ || null);
  const show = (nextTab) => {
    setTab(nextTab);
    setOpen(true);
  };
  useEffect(() => {
    const openSettings = () => show("api");
    const syncSession = (event) => setSession(event.detail || null);
    const closeOnTabChange = (event) => {
      if (event.detail?.tab !== "home") setOpen(false);
    };
    window.addEventListener("workbench-open-model-settings", openSettings);
    window.addEventListener("workbench-auth-session-sync", syncSession);
    window.addEventListener("workbench-tab-change", closeOnTabChange);
    return () => {
      window.removeEventListener("workbench-open-model-settings", openSettings);
      window.removeEventListener("workbench-auth-session-sync", syncSession);
      window.removeEventListener("workbench-tab-change", closeOnTabChange);
    };
  }, []);
  const canManageModels = ["管理员", "编辑者"].includes(session?.role);
  const settingsHint = !session ? "请先登录后再修改 API/模型设置" : canManageModels ? "" : "仅管理员或编辑者可修改 API/模型设置";
  return (
    <>
      <Tooltip title={settingsHint}>
        <Button type="default" icon={<SettingOutlined />} disabled={!canManageModels} onClick={() => show("api")}>
        API/模型设置
        </Button>
      </Tooltip>
      <SettingsModal open={open} initialTab={tab} onClose={() => setOpen(false)} />
    </>
  );
}

function showModelAvailabilityNotice() {
  if (typeof window.__WORKBENCH_SHOW_MODEL_NOTICE__ === "function") {
    window.__WORKBENCH_SHOW_MODEL_NOTICE__();
    return;
  }
  window.dispatchEvent(new CustomEvent("workbench-model-required"));
}

function sharedModelAuthHeaders() {
  const cookie = document.cookie.split(";").map((item) => item.trim()).find((item) => item.startsWith("Admin-Token="));
  const token = cookie ? decodeURIComponent(cookie.split("=").slice(1).join("=")) : localStorage.getItem("Admin-Token") || "";
  return token ? { "X-Token": token } : {};
}

function ModelAvailabilityNotice() {
  const initial = window.__WORKBENCH_MODEL_AVAILABILITY__ || { ready: false };
  const [visible, setVisible] = useState(!initial.ready);
  useEffect(() => {
    const sync = (event) => {
      const nextState = event.detail || { ready: false };
      setVisible(!nextState.ready);
    };
    const required = () => {
      setVisible(true);
    };
    window.__WORKBENCH_SHOW_MODEL_NOTICE__ = required;
    window.addEventListener("workbench-model-availability-sync", sync);
    window.addEventListener("workbench-model-required", required);
    return () => {
      if (window.__WORKBENCH_SHOW_MODEL_NOTICE__ === required) {
        delete window.__WORKBENCH_SHOW_MODEL_NOTICE__;
      }
      window.removeEventListener("workbench-model-availability-sync", sync);
      window.removeEventListener("workbench-model-required", required);
    };
  }, []);
  if (!visible) return null;
  return (
    <Alert
      showIcon
      type="warning"
      message="工作台模型尚不可用，请先接入 API/模型设置"
      description="请完成 API 地址、密钥和模型校验后再为智能体选择模型。"
      action={(
        <Space size={8}>
          <Button size="small" type="primary" onClick={() => window.dispatchEvent(new CustomEvent("workbench-open-model-settings"))}>
            接入 API/模型设置
          </Button>
          <Button size="small" onClick={() => setVisible(false)}>
            已读
          </Button>
        </Space>
      )}
    />
  );
}

function AgentDetailSelect({
  stateKey,
  syncEvent,
  changeEvent,
  ariaLabel,
  placeholder,
  disabledWhenEmpty = false,
  emptyPlaceholder,
  notifyWhenEmpty = false
}) {
  const initial = window[stateKey] || { value: "", options: [] };
  const [value, setValue] = useState(initial.value);
  const [options, setOptions] = useState(initial.options);
  useEffect(() => {
    const sync = (event) => {
      setValue(event.detail?.value || "");
      setOptions(Array.isArray(event.detail?.options) ? event.detail.options : []);
    };
    window.addEventListener(syncEvent, sync);
    return () => window.removeEventListener(syncEvent, sync);
  }, [syncEvent]);
  const unavailable = disabledWhenEmpty && !options.length;
  return (
    <div
      className="workbench-detail-select-guard"
      onMouseDownCapture={unavailable && notifyWhenEmpty ? (event) => {
        event.preventDefault();
        showModelAvailabilityNotice();
      } : undefined}
    >
      <Select
        className="workbench-control-select workbench-detail-select"
        aria-label={ariaLabel}
        value={value || undefined}
        disabled={unavailable}
        placeholder={!options.length && emptyPlaceholder ? emptyPlaceholder : placeholder}
        options={options}
        style={{ width: "100%" }}
        onChange={(nextValue) => {
          setValue(nextValue);
          window.dispatchEvent(new CustomEvent(changeEvent, { detail: nextValue }));
        }}
      />
    </div>
  );
}

function AgentCategorySelect() {
  return (
    <AgentDetailSelect
      stateKey="__WORKBENCH_AGENT_CATEGORY__"
      syncEvent="workbench-agent-category-sync"
      changeEvent="workbench-agent-category-change"
      ariaLabel="选择智能体分类"
      placeholder="选择分类"
    />
  );
}

function AgentModelSelect() {
  return (
    <AgentDetailSelect
      stateKey="__WORKBENCH_AGENT_MODEL__"
      syncEvent="workbench-agent-model-sync"
      changeEvent="workbench-agent-model-change"
      ariaLabel="选择智能体模型"
      placeholder="选择模型"
      disabledWhenEmpty
      emptyPlaceholder="请先接入 API/模型设置"
      notifyWhenEmpty
    />
  );
}

function AgentKnowledgeSelect() {
  return (
    <AgentDetailSelect
      stateKey="__WORKBENCH_AGENT_KNOWLEDGE__"
      syncEvent="workbench-agent-knowledge-sync"
      changeEvent="workbench-agent-knowledge-change"
      ariaLabel="选择智能体知识库"
      placeholder="选择知识库"
    />
  );
}

function AgentFilters() {
  const [status, setStatus] = useState("all");
  const [sort, setSort] = useState("newest");
  return (
    <Space size={8}>
      <Select className="workbench-control-select workbench-filter-select" aria-label="按状态筛选智能体" value={status} style={{ width: 112 }} options={[
        { value: "all", label: "全部状态" },
        { value: "running", label: "运行中" },
        { value: "idle", label: "空闲" },
        { value: "completed", label: "已完成" }
      ]} onChange={(value) => {
        setStatus(value);
        window.dispatchEvent(new CustomEvent("workbench-status-filter", { detail: value }));
      }} />
      <Select className="workbench-control-select workbench-filter-select" aria-label="智能体排序" value={sort} style={{ width: 120 }} options={[
        { value: "newest", label: "最新创建" },
        { value: "oldest", label: "最早创建" },
        { value: "name-asc", label: "名称 A-Z" },
        { value: "name-desc", label: "名称 Z-A" }
      ]} onChange={(value) => {
        setSort(value);
        window.dispatchEvent(new CustomEvent("workbench-sort-order", { detail: value }));
      }} />
    </Space>
  );
}

function AgentViewSwitch() {
  const [mode, setMode] = useState(window.__WORKBENCH_AGENT_VIEW_MODE__ || "grid");
  useEffect(() => {
    const sync = (event) => setMode(event.detail === "grid" ? "grid" : "orbit");
    window.addEventListener("workbench-agent-view-sync", sync);
    return () => window.removeEventListener("workbench-agent-view-sync", sync);
  }, []);
  const changeMode = (nextMode) => {
    setMode(nextMode);
    window.dispatchEvent(new CustomEvent("workbench-agent-view-change", { detail: nextMode }));
  };
  return (
    <Space size={8}>
      <Button
        className={mode === "grid" ? "active" : ""}
        icon={<AppstoreOutlined />}
        aria-pressed={mode === "grid"}
        onClick={() => changeMode("grid")}
      >
        卡片视图
      </Button>
      <Button
        className={mode === "orbit" ? "active" : ""}
        icon={<CompassOutlined />}
        aria-pressed={mode === "orbit"}
        onClick={() => changeMode("orbit")}
      >
        环绕视图
      </Button>
    </Space>
  );
}

function AgentSearch() {
  const [value, setValue] = useState("");
  useEffect(() => {
    const sync = (event) => setValue(String(event.detail || ""));
    window.addEventListener("workbench-agent-search-sync", sync);
    return () => window.removeEventListener("workbench-agent-search-sync", sync);
  }, []);
  const update = (nextValue) => {
    setValue(nextValue);
    window.dispatchEvent(new CustomEvent("workbench-agent-search-change", { detail: nextValue }));
  };
  return (
    <Input
      aria-label="搜索智能体"
      allowClear
      prefix={<SearchOutlined />}
      placeholder="搜索智能体、模型、知识库或工具..."
      value={value}
      onChange={(event) => update(event.target.value)}
      onPressEnter={(event) => update(event.currentTarget.value)}
    />
  );
}

function AgentInsightActions() {
  const [form] = Form.useForm();
  const [agent, setAgent] = useState(window.__WORKBENCH_SELECTED_AGENT__ || null);
  const [open, setOpen] = useState(false);
  const [editorMode, setEditorMode] = useState("edit");
  useEffect(() => {
    const sync = (event) => setAgent(event.detail || null);
    const openCreate = (event) => {
      const current = window.__WORKBENCH_SELECTED_AGENT__ || agent;
      const categoryId = event.detail?.categoryId;
      setEditorMode("create");
      form.resetFields();
      form.setFieldsValue({
        label: "",
        role: "通用智能体",
        categoryId: categoryId && categoryId !== "all" ? categoryId : (current?.categoryId || "uncategorized"),
        model: current?.modelOptions?.[0]?.value || current?.model || "",
        knowledge: current?.knowledgeOptions?.[0]?.value || current?.knowledge || "",
        tools: []
      });
      setOpen(true);
    };
    const closeOnTabChange = (event) => {
      if (event.detail?.tab !== "home") setOpen(false);
    };
    window.addEventListener("workbench-selected-agent-sync", sync);
    window.addEventListener("workbench-agent-create-open", openCreate);
    window.addEventListener("workbench-tab-change", closeOnTabChange);
    return () => {
      window.removeEventListener("workbench-selected-agent-sync", sync);
      window.removeEventListener("workbench-agent-create-open", openCreate);
      window.removeEventListener("workbench-tab-change", closeOnTabChange);
    };
  }, [agent, form]);
  const openEditor = () => {
    if (!agent) return;
    setEditorMode("edit");
    form.setFieldsValue({
      label: agent.label,
      role: agent.role,
      categoryId: agent.categoryId,
      model: agent.model,
      knowledge: agent.knowledge,
      tools: agent.tools
    });
    setOpen(true);
  };
  const save = async () => {
    const values = await form.validateFields();
    window.dispatchEvent(new CustomEvent(
      editorMode === "create" ? "workbench-agent-create-save" : "workbench-agent-edit-save",
      { detail: editorMode === "create" ? values : { id: agent?.id, ...values } }
    ));
    setOpen(false);
  };
  const editorOptions = agent || window.__WORKBENCH_SELECTED_AGENT__ || {};
  const deleteAgent = () => {
    if (!agent) return;
    Modal.confirm({
      centered: true,
      title: "删除智能体",
      content: `确定删除“${agent.label}”吗？此操作不可撤销。`,
      okText: "删除",
      cancelText: "取消",
      okButtonProps: { danger: true },
      onOk: () => {
        window.dispatchEvent(new CustomEvent("workbench-agent-delete", {
          detail: { id: agent.id }
        }));
      }
    });
  };
  return (
    <>
      <Space.Compact block>
        <Button icon={<EditOutlined />} onClick={openEditor}>编辑智能体</Button>
        <Dropdown
          trigger={["click"]}
          placement="bottomRight"
          menu={{
            items: [{
              key: "delete",
              danger: true,
              icon: <DeleteOutlined />,
              label: "删除智能体"
            }],
            onClick: ({ key }) => {
              if (key === "delete") deleteAgent();
            }
          }}
        >
          <Button icon={<MoreOutlined />} aria-label="更多操作" />
        </Dropdown>
      </Space.Compact>
      <Modal
        centered
        open={open}
        title={editorMode === "create" ? "新建智能体" : "编辑智能体"}
        okText={editorMode === "create" ? "创建智能体" : "保存修改"}
        cancelText="取消"
        onOk={save}
        onCancel={() => setOpen(false)}
      >
        <Form form={form} layout="vertical" requiredMark={false}>
          <Form.Item label="智能体名称" name="label" rules={[{ required: true, message: "请输入智能体名称" }]}>
            <Input />
          </Form.Item>
          <Form.Item label="智能体角色" name="role" rules={[{ required: true, message: "请输入智能体角色" }]}>
            <Input />
          </Form.Item>
          <Form.Item label="智能体分类" name="categoryId">
            <Select options={editorOptions.categoryOptions || []} />
          </Form.Item>
          <Form.Item label="默认模型" name="model" rules={[{ required: true, message: "请选择已接入并通过校验的模型" }]}>
            <Select
              disabled={!(editorOptions.modelOptions || []).length}
              placeholder={(editorOptions.modelOptions || []).length ? "选择模型" : "请先接入 API/模型设置"}
              options={editorOptions.modelOptions || []}
            />
          </Form.Item>
          <Form.Item label="知识库" name="knowledge">
            <Select options={editorOptions.knowledgeOptions || []} />
          </Form.Item>
          <Form.Item label="工具 Skills" name="tools">
            <Select mode="multiple" options={editorOptions.toolOptions || []} />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}

const customCategoryIcons = [AppstoreOutlined, ProjectOutlined, CompassOutlined, StarOutlined, TagsOutlined];

function iconForCategory(row) {
  const builtIn = {
    all: RobotOutlined,
    life: UserOutlined,
    tutorial: BookOutlined,
    "ai-life": BulbOutlined,
    media: NotificationOutlined,
    psychology: ReadOutlined,
    uncategorized: FolderOutlined
  };
  if (builtIn[row.id]) return builtIn[row.id];
  const hash = String(row.id || row.label || "")
    .split("")
    .reduce((sum, char) => sum + char.charCodeAt(0), 0);
  return customCategoryIcons[hash % customCategoryIcons.length];
}

function AgentCategoryBoard() {
  const [rows, setRows] = useState(window.__WORKBENCH_AGENT_CATEGORIES__ || []);
  useEffect(() => {
    const sync = (event) => setRows(Array.isArray(event.detail) ? event.detail : []);
    window.addEventListener("workbench-agent-categories-sync", sync);
    return () => window.removeEventListener("workbench-agent-categories-sync", sync);
  }, []);
  return rows.map((row) => {
    const CategoryIcon = iconForCategory(row);
    return (
      <button
        className={`agent-board-item${row.active ? " active" : ""}`}
        type="button"
        data-category={row.id}
        aria-pressed={row.active}
        key={row.id}
      >
        <b><CategoryIcon /><span>{row.label}</span></b>
        <span>{row.count}</span>
      </button>
    );
  });
}

function AgentCategoryActions() {
  const [category, setCategory] = useState(
    window.__WORKBENCH_AGENT_CATEGORY_ACTIONS__ || {
      id: "all",
      label: "全部智能体",
      canDelete: false
    }
  );
  useEffect(() => {
    const sync = (event) => setCategory(event.detail || { id: "all", label: "全部智能体", canDelete: false });
    window.addEventListener("workbench-agent-category-actions-sync", sync);
    return () => window.removeEventListener("workbench-agent-category-actions-sync", sync);
  }, []);
  const remove = () => {
    if (!category.canDelete) return;
    Modal.confirm({
      centered: true,
      title: "删除智能体分类",
      content: `确定删除“${category.label}”吗？分类中的智能体将移入“未分类”。`,
      okText: "删除",
      cancelText: "取消",
      okButtonProps: { danger: true },
      onOk: () => {
        window.dispatchEvent(new CustomEvent("workbench-agent-category-delete-request", {
          detail: { id: category.id }
        }));
      }
    });
  };
  return (
    <Space.Compact block>
      <Button
        icon={<PlusOutlined />}
        onClick={() => window.dispatchEvent(new CustomEvent("workbench-agent-category-create-request"))}
      >
        新建分类
      </Button>
      <Button
        danger
        icon={<DeleteOutlined />}
        disabled={!category.canDelete}
        aria-label={category.canDelete ? `删除分类 ${category.label}` : "当前分类不可删除"}
        onClick={remove}
      />
    </Space.Compact>
  );
}

function StatIcon({ type }) {
  const asset = window.__STAT_ICON_ASSETS__?.[type];
  if (asset) {
    return (
      <span className="agent-stat-ant-icon">
        <img src={asset} alt="" aria-hidden="true" />
      </span>
    );
  }
  const icons = {
    total: RobotOutlined,
    active: ThunderboltOutlined,
    conversations: CommentOutlined,
    calls: RiseOutlined,
    users: TeamOutlined
  };
  const Icon = icons[type] || RobotOutlined;
  return <span className="agent-stat-ant-icon"><Icon /></span>;
}

function createDraftConversation(agent) {
  const now = new Date().toISOString();
  return {
    id: `draft-${Date.now()}`,
    agentId: agent.id,
    agentLabel: agent.label,
    title: "新对话",
    createdAt: now,
    updatedAt: now,
    messages: []
  };
}

function conversationGroup(conversation) {
  const updatedAt = new Date(conversation.updatedAt || conversation.createdAt || 0);
  const now = new Date();
  if (
    updatedAt.getFullYear() === now.getFullYear()
    && updatedAt.getMonth() === now.getMonth()
    && updatedAt.getDate() === now.getDate()
  ) return "今天";
  return "更早";
}

function agentPromptItems(agent) {
  const tools = Array.isArray(agent?.tools) ? agent.tools.filter(Boolean) : [];
  const primaryTools = tools.slice(0, 3);
  return [
    {
      key: "popular",
      icon: <RiseOutlined />,
      label: "热门问题",
      description: "快速开始常用任务",
      children: [
        { key: "popular-1", label: `帮我规划一个${agent?.role || "智能体"}任务` },
        { key: "popular-2", label: `基于现有知识整理「${agent?.label || "当前项目"}」` },
        { key: "popular-3", label: "先给我结论，再列出下一步行动" }
      ]
    },
    {
      key: "skills",
      icon: <BulbOutlined />,
      label: "能力指南",
      description: "按智能体已挂载能力提问",
      children: (primaryTools.length ? primaryTools : ["内容整理", "方案生成", "知识检索"]).map((tool, index) => ({
        key: `skill-${index}`,
        label: `使用${tool}处理当前需求`
      }))
    },
    {
      key: "start",
      icon: <ThunderboltOutlined />,
      label: "快速开始",
      description: "描述目标，智能体会主动拆解",
      children: [
        { key: "start-1", label: "分析我的目标并给出执行方案" },
        { key: "start-2", label: "把复杂问题拆成清晰步骤" }
      ]
    }
  ];
}

const pptThemeOptions = [
  { value: "clink", label: "Clink 浅蓝商务" },
  { value: "minimal", label: "极简白" },
  { value: "executive", label: "深蓝汇报" },
  { value: "warm", label: "暖色提案" }
];

const pptThemes = {
  clink: { bg: "F5F9FF", surface: "FFFFFF", primary: "075EE6", accent: "6EB8FF", text: "17263A", muted: "65768D" },
  minimal: { bg: "FFFFFF", surface: "F7F8FA", primary: "242A33", accent: "9AA7B6", text: "151A22", muted: "6C7684" },
  executive: { bg: "0B1730", surface: "142545", primary: "4D8DFF", accent: "65D6C2", text: "FFFFFF", muted: "B5C4DD" },
  warm: { bg: "FFF9F2", surface: "FFFFFF", primary: "E77834", accent: "F2B84B", text: "31251D", muted: "806E62" }
};

function normalizeOutline(text, count) {
  const cleaned = String(text || "")
    .split(/\r?\n/)
    .map((line) => line.replace(/^\s*(?:[-*•]|\d+[.)、])\s*/, "").trim())
    .filter(Boolean);
  const fallback = ["背景与目标", "核心洞察", "方案框架", "执行路径", "关键数据", "风险与对策", "下一步行动"];
  return [...cleaned, ...fallback].slice(0, Math.max(2, count));
}

function splitOutlineItem(item) {
  const parts = String(item || "").split(/[:：]/);
  const title = (parts.shift() || "核心内容").trim();
  const detail = parts.join("：").trim() || `围绕“${title}”说明关键结论、证据与行动建议。`;
  return { title, detail };
}

function addSlideNumber(slide, index, palette) {
  slide.addText(String(index).padStart(2, "0"), {
    x: 12.25, y: 7.05, w: 0.55, h: 0.2,
    fontFace: "Aptos", fontSize: 8, color: palette.muted,
    margin: 0, align: "right"
  });
}

async function writePptxDeck(values, agent) {
  const pptx = new PptxGenJS();
  const palette = pptThemes[values.theme] || pptThemes.clink;
  const slideCount = Math.max(5, Math.min(20, Number(values.slideCount) || 8));
  const contentCount = Math.max(2, slideCount - 3);
  const outline = normalizeOutline(values.outline, contentCount);
  const topic = String(values.topic || "未命名演示").trim();
  const audience = String(values.audience || "项目相关成员").trim();
  pptx.layout = "LAYOUT_WIDE";
  pptx.author = "Clink AI";
  pptx.company = "Clink AI";
  pptx.subject = topic;
  pptx.title = topic;
  pptx.lang = values.language === "en" ? "en-US" : "zh-CN";
  pptx.theme = {
    headFontFace: values.language === "en" ? "Aptos Display" : "Microsoft YaHei",
    bodyFontFace: values.language === "en" ? "Aptos" : "Microsoft YaHei",
    lang: pptx.lang
  };

  const cover = pptx.addSlide();
  cover.background = { color: palette.bg };
  cover.addShape(pptx.ShapeType.roundRect, { x: 0.65, y: 0.65, w: 12.05, h: 6.2, rectRadius: 0.12, fill: { color: palette.surface, transparency: values.theme === "executive" ? 8 : 0 }, line: { color: palette.accent, transparency: 72, width: 1.2 } });
  cover.addShape(pptx.ShapeType.rect, { x: 0.65, y: 0.65, w: 0.14, h: 6.2, fill: { color: palette.primary }, line: { color: palette.primary } });
  cover.addText("CLINK AI · PRESENTATION", { x: 1.25, y: 1.3, w: 5.4, h: 0.35, fontSize: 11, bold: true, color: palette.primary, charSpacing: 1.4, margin: 0 });
  cover.addText(topic, { x: 1.25, y: 2.05, w: 9.8, h: 1.55, fontSize: 34, bold: true, color: palette.text, breakLine: false, fit: "shrink", margin: 0 });
  cover.addText(`${audience}\n${new Date().toLocaleDateString(values.language === "en" ? "en-US" : "zh-CN")}`, { x: 1.25, y: 4.35, w: 6.4, h: 0.8, fontSize: 13, color: palette.muted, breakLine: false, margin: 0 });
  cover.addText("由通用 PPT 生成智能体创建", { x: 8.4, y: 5.9, w: 3.45, h: 0.3, fontSize: 10, color: palette.muted, align: "right", margin: 0 });
  cover.addNotes(`演讲提示：用一句话说明本次演示为什么重要，以及希望听众最终采取什么行动。`);

  const agenda = pptx.addSlide();
  agenda.background = { color: palette.bg };
  agenda.addText("目录 / AGENDA", { x: 0.8, y: 0.65, w: 4.5, h: 0.55, fontSize: 24, bold: true, color: palette.text, margin: 0 });
  outline.forEach((item, index) => {
    const { title } = splitOutlineItem(item);
    const col = index % 2;
    const row = Math.floor(index / 2);
    const x = 0.85 + col * 6.15;
    const y = 1.6 + row * 1.15;
    agenda.addShape(pptx.ShapeType.roundRect, { x, y, w: 5.7, h: 0.82, fill: { color: palette.surface }, line: { color: palette.accent, transparency: 68, width: 1 } });
    agenda.addText(String(index + 1).padStart(2, "0"), { x: x + 0.2, y: y + 0.19, w: 0.5, h: 0.28, fontSize: 13, bold: true, color: palette.primary, margin: 0 });
    agenda.addText(title, { x: x + 0.82, y: y + 0.16, w: 4.55, h: 0.34, fontSize: 14, bold: true, color: palette.text, fit: "shrink", margin: 0 });
  });
  addSlideNumber(agenda, 2, palette);
  agenda.addNotes("演讲提示：快速说明结构，不逐条朗读目录。");

  outline.forEach((item, index) => {
    const { title, detail } = splitOutlineItem(item);
    const slide = pptx.addSlide();
    slide.background = { color: palette.bg };
    slide.addText(String(index + 1).padStart(2, "0"), { x: 0.8, y: 0.58, w: 0.58, h: 0.34, fontSize: 14, bold: true, color: palette.primary, margin: 0 });
    slide.addText(title, { x: 1.45, y: 0.5, w: 10.6, h: 0.6, fontSize: 25, bold: true, color: palette.text, fit: "shrink", margin: 0 });
    slide.addShape(pptx.ShapeType.roundRect, { x: 0.82, y: 1.45, w: 7.7, h: 4.95, fill: { color: palette.surface }, line: { color: palette.accent, transparency: 76, width: 1 } });
    slide.addText(detail, { x: 1.25, y: 1.95, w: 6.8, h: 1.3, fontSize: 19, bold: true, color: palette.text, valign: "mid", breakLine: false, fit: "shrink", margin: 0.04 });
    const bullets = [
      "先给出明确结论，再补充关键依据",
      "用数据、案例或知识库材料支撑观点",
      "以可执行的下一步结束本页"
    ];
    slide.addText(bullets.map((text) => ({ text, options: { bullet: { indent: 14 }, hanging: 3, breakLine: true } })), { x: 1.25, y: 3.45, w: 6.7, h: 1.8, fontSize: 13, color: palette.muted, breakLine: false, paraSpaceAfterPt: 12, margin: 0.02 });
    slide.addShape(pptx.ShapeType.roundRect, { x: 8.85, y: 1.45, w: 3.65, h: 4.95, fill: { color: palette.primary, transparency: values.theme === "executive" ? 5 : 7 }, line: { color: palette.primary, transparency: 100 } });
    slide.addText(index % 2 === 0 ? "KEY\nINSIGHT" : "ACTION\nPOINT", { x: 9.35, y: 2.25, w: 2.65, h: 1.35, fontSize: 25, bold: true, color: "FFFFFF", align: "center", valign: "mid", margin: 0 });
    slide.addText(`${Math.min(99, 68 + index * 4)}%`, { x: 9.35, y: 4.2, w: 2.65, h: 0.7, fontSize: 27, bold: true, color: "FFFFFF", align: "center", margin: 0 });
    slide.addText("重点完成度示意", { x: 9.35, y: 5.0, w: 2.65, h: 0.3, fontSize: 10, color: "FFFFFF", transparency: 18, align: "center", margin: 0 });
    addSlideNumber(slide, index + 3, palette);
    slide.addNotes(`演讲备注：围绕“${title}”展开。先讲结论，再讲依据，最后明确行动。`);
  });

  const closing = pptx.addSlide();
  closing.background = { color: palette.primary };
  closing.addText(values.language === "en" ? "Thank you" : "谢谢", { x: 0.9, y: 2.2, w: 11.5, h: 1.0, fontSize: 40, bold: true, color: "FFFFFF", align: "center", margin: 0 });
  closing.addText(values.language === "en" ? "Questions & next steps" : "问题与下一步", { x: 0.9, y: 3.45, w: 11.5, h: 0.5, fontSize: 17, color: "FFFFFF", transparency: 15, align: "center", margin: 0 });
  closing.addText(`Clink AI · ${agent?.label || "通用PPT生成"}`, { x: 0.9, y: 6.35, w: 11.5, h: 0.3, fontSize: 10, color: "FFFFFF", transparency: 30, align: "center", margin: 0 });
  closing.addNotes("演讲提示：回到核心结论，确认下一步负责人和时间点。");

  const safeName = topic.replace(/[\\/:*?"<>|]/g, "-").slice(0, 60) || "Clink-AI-Presentation";
  await pptx.writeFile({ fileName: `${safeName}.pptx` });
  return { slideCount: outline.length + 3, fileName: `${safeName}.pptx` };
}

function PptDeckBuilder({ open, agent, onClose }) {
  const [form] = Form.useForm();
  const [generating, setGenerating] = useState(false);
  const [outlining, setOutlining] = useState(false);
  useEffect(() => {
    if (!open) return;
    form.setFieldsValue({
      topic: "",
      audience: "项目相关成员",
      slideCount: 8,
      theme: "clink",
      language: "zh",
      outline: ""
    });
  }, [open, form]);
  const createOutline = async () => {
    const values = await form.validateFields(["topic", "audience", "slideCount", "language"]);
    setOutlining(true);
    const count = Math.max(2, Number(values.slideCount || 8) - 3);
    try {
      const response = await fetch("/api/agent-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json", ...sharedModelAuthHeaders() },
        body: JSON.stringify({
          model: agent?.model,
          messages: [
            { role: "system", content: `你是演示文稿策划智能体。只返回 ${count} 行大纲，每行格式为“标题：一句话核心内容”，不要编号，不要解释。` },
            { role: "user", content: `主题：${values.topic}\n受众：${values.audience}\n语言：${values.language === "en" ? "English" : "中文"}` }
          ]
        })
      });
      const payload = await response.json();
      if (!payload.ok) throw new Error(payload.message);
      form.setFieldValue("outline", normalizeOutline(payload.data?.text, count).join("\n"));
      message.success("已使用当前模型生成 PPT 大纲");
    } catch (error) {
      form.setFieldValue("outline", normalizeOutline("", count).map((item) => `${item}：围绕“${values.topic}”提炼本页核心结论。`).join("\n"));
      message.info("当前模型暂不可用，已生成可编辑的本地大纲");
    } finally {
      setOutlining(false);
    }
  };
  const generate = async () => {
    const values = await form.validateFields();
    setGenerating(true);
    try {
      if (!String(values.outline || "").trim()) {
        const count = Math.max(2, Number(values.slideCount || 8) - 3);
        values.outline = normalizeOutline("", count).map((item) => `${item}：围绕“${values.topic}”提炼本页核心结论。`).join("\n");
      }
      const result = await writePptxDeck(values, agent);
      message.success(`已生成 ${result.slideCount} 页可编辑 PPTX`);
      window.dispatchEvent(new CustomEvent("workbench-runtime-refresh"));
    } catch (error) {
      console.error("PPTX generation failed", error);
      message.error(error.message || "PPTX 生成失败");
    } finally {
      setGenerating(false);
    }
  };
  return (
    <Modal
      centered
      destroyOnHidden
      open={open}
      width={720}
      title={<Space><FilePptOutlined />通用 PPT 工作台</Space>}
      okText="生成并下载 PPTX"
      cancelText="关闭"
      okButtonProps={{ icon: <DownloadOutlined /> }}
      confirmLoading={generating}
      onOk={generate}
      onCancel={onClose}
      rootClassName="ppt-agent-builder-modal"
    >
      <div className="ppt-agent-source-note">
        <b>智能体工作流</b>
        <span>主题 → AI 大纲 → 模板排版 → 图表信息页 → 演讲备注 → 可编辑 PPTX</span>
      </div>
      <Form form={form} layout="vertical" requiredMark={false}>
        <Form.Item label="演示主题" name="topic" rules={[{ required: true, message: "请输入演示主题" }]}>
          <Input placeholder="例如：2026 年 AI 产品增长策略" />
        </Form.Item>
        <div className="ppt-agent-form-grid">
          <Form.Item label="目标受众" name="audience" rules={[{ required: true, message: "请输入目标受众" }]}>
            <Input placeholder="管理层、客户、项目团队..." />
          </Form.Item>
          <Form.Item label="视觉模板" name="theme">
            <Select options={pptThemeOptions} />
          </Form.Item>
          <Form.Item label="语言" name="language">
            <Select options={[{ value: "zh", label: "中文" }, { value: "en", label: "English" }]} />
          </Form.Item>
          <Form.Item label="页数" name="slideCount">
            <InputNumber min={5} max={20} style={{ width: "100%" }} />
          </Form.Item>
        </div>
        <Form.Item label="页面大纲" name="outline" extra="每行生成一页内容，可写成“标题：核心内容”。">
          <Input.TextArea rows={7} placeholder={"背景与目标：说明项目背景和演示目标\n核心洞察：提炼最重要的判断\n方案框架：展示解决方案结构"} />
        </Form.Item>
        <Button icon={<ThunderboltOutlined />} loading={outlining} onClick={createOutline}>
          使用当前模型生成大纲
        </Button>
      </Form>
    </Modal>
  );
}

function AgentChatModal() {
  const [open, setOpen] = useState(false);
  const [agent, setAgent] = useState(null);
  const [conversations, setConversations] = useState([]);
  const [activeKey, setActiveKey] = useState("");
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState("");
  const [pptBuilderOpen, setPptBuilderOpen] = useState(false);

  useEffect(() => {
    const show = async (event) => {
      const nextAgent = event.detail;
      if (!nextAgent?.id) return;
      const availability = window.__WORKBENCH_MODEL_AVAILABILITY__ || { ready: false, models: [] };
      const availableModels = Array.isArray(availability.models) ? availability.models : [];
      if (!availability.ready || !nextAgent.model || !availableModels.includes(nextAgent.model)) {
        showModelAvailabilityNotice();
        return;
      }
      setAgent(nextAgent);
      setOpen(true);
      setLoading(false);
      setValue("");
      setPptBuilderOpen(false);
      try {
        const response = await fetch(`/api/agent-conversations?agentId=${encodeURIComponent(nextAgent.id)}`);
        const payload = await response.json();
        if (!payload.ok) throw new Error(payload.message);
        const saved = Array.isArray(payload.data) ? payload.data : [];
        const next = saved.length ? saved : [createDraftConversation(nextAgent)];
        setConversations(next);
        setActiveKey(next[0].id);
      } catch (error) {
        const draft = createDraftConversation(nextAgent);
        setConversations([draft]);
        setActiveKey(draft.id);
        message.error(error.message || "对话记录读取失败");
      }
    };
    const closeOnTabChange = (event) => {
      if (event.detail?.tab !== "home") {
        setOpen(false);
        setPptBuilderOpen(false);
      }
    };
    window.addEventListener("workbench-open-agent-chat", show);
    window.addEventListener("workbench-tab-change", closeOnTabChange);
    return () => {
      window.removeEventListener("workbench-open-agent-chat", show);
      window.removeEventListener("workbench-tab-change", closeOnTabChange);
    };
  }, []);

  const activeConversation = conversations.find((item) => item.id === activeKey);

  const updateConversation = (id, updater) => {
    setConversations((current) => current.map((item) => item.id === id ? updater(item) : item));
  };

  const createConversation = () => {
    if (!agent) return;
    const draft = createDraftConversation(agent);
    setConversations((current) => [draft, ...current]);
    setActiveKey(draft.id);
    setValue("");
  };

  const submit = async (prompt) => {
    const text = String(prompt || "").trim();
    if (!text || !agent || !activeConversation || loading) return;
    const timestamp = new Date().toISOString();
    const userMessage = { id: `user-${Date.now()}`, role: "user", content: text, createdAt: timestamp };
    const pendingId = `pending-${Date.now()}`;
    const pendingMessage = { id: pendingId, role: "assistant", content: "", createdAt: timestamp, loading: true };
    const history = activeConversation.messages.filter((item) => !item.loading);
    updateConversation(activeConversation.id, (item) => ({ ...item, messages: [...history, userMessage, pendingMessage] }));
    setValue("");
    setLoading(true);
    try {
      const response = await fetch("/api/agent-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json", ...sharedModelAuthHeaders() },
        body: JSON.stringify({
          model: agent.model,
          messages: [
            {
              role: "system",
              content: `你是“${agent.label}”，角色是“${agent.role}”。知识库是“${agent.knowledge}”，可用工具包括：${agent.tools.join("、")}。`
            },
            ...history.map((item) => ({ role: item.role === "assistant" ? "assistant" : "user", content: item.content })),
            { role: "user", content: text }
          ]
        })
      });
      const payload = await response.json();
      if (!payload.ok) throw new Error(payload.message);
      const assistantMessage = {
        id: `assistant-${Date.now()}`,
        role: "assistant",
        content: payload.data?.text || "模型未返回内容",
        createdAt: new Date().toISOString()
      };
      const finalMessages = [...history, userMessage, assistantMessage];
      const title = activeConversation.title === "新对话" ? text.slice(0, 24) : activeConversation.title;
      const saveResponse = await fetch("/api/agent-conversations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...activeConversation,
          agentId: agent.id,
          agentLabel: agent.label,
          title,
          messages: finalMessages
        })
      });
      const savedPayload = await saveResponse.json();
      if (!savedPayload.ok) throw new Error(savedPayload.message);
      setConversations((current) => [
        savedPayload.data,
        ...current.filter((item) => item.id !== activeConversation.id)
      ]);
      setActiveKey(savedPayload.data.id);
      window.dispatchEvent(new CustomEvent("workbench-runtime-refresh"));
    } catch (error) {
      updateConversation(activeConversation.id, (item) => ({
        ...item,
        messages: [...history, userMessage, {
          id: `error-${Date.now()}`,
          role: "assistant",
          content: error.message || "模型调用失败",
          createdAt: new Date().toISOString(),
          status: "error"
        }]
      }));
      message.error(error.message || "模型调用失败");
    } finally {
      setLoading(false);
    }
  };

  const bubbleItems = (activeConversation?.messages || []).map((item) => ({
    key: item.id,
    role: item.role,
    content: item.content,
    loading: Boolean(item.loading),
    status: item.status
  }));
  const hasUserMessages = (activeConversation?.messages || []).some((item) => item.role === "user");
  const promptItems = agentPromptItems(agent);

  return (
    <Modal
      centered
      destroyOnHidden
      footer={null}
      open={open}
      width={1160}
      title={null}
      rootClassName="agent-x-modal agent-x-modal-v3"
      onCancel={() => setOpen(false)}
    >
      <div className="agent-x-shell agent-x-shell-v3">
        <aside className="agent-x-history" aria-label="对话记录">
          <div className="agent-x-brand">
            <span className="agent-x-brand-mark"><RobotOutlined /></span>
            <span>Ant Design X</span>
          </div>
          <Conversations
            activeKey={activeKey}
            groupable
            creation={{
              label: "开启新对话",
              icon: <PlusOutlined />,
              onClick: createConversation
            }}
            items={conversations.map((item) => ({
              key: item.id,
              label: item.title || "新对话",
              icon: <MessageOutlined />,
              group: conversationGroup(item)
            }))}
            onActiveChange={setActiveKey}
          />
          <div className="agent-x-account">
            <Avatar size={26} icon={<UserOutlined />} />
            <span>当前登录成员</span>
          </div>
        </aside>
        <main className="agent-x-chat">
          {agent?.isPpt ? (
            <div className="ppt-agent-chat-tools">
              <span><FilePptOutlined /> 通用 PPT 生成</span>
              <Space size={8}>
                <Tag icon={<BulbOutlined />}>AI 大纲</Tag>
                <Tag icon={<BarChartOutlined />}>图表信息页</Tag>
                <Tag icon={<MessageOutlined />}>演讲备注</Tag>
                <Button type="primary" icon={<FilePptOutlined />} onClick={() => setPptBuilderOpen(true)}>
                  打开 PPT 工作台
                </Button>
              </Space>
            </div>
          ) : null}
          {hasUserMessages ? (
            <Bubble.List
              autoScroll
              items={bubbleItems}
              role={{
                assistant: {
                  placement: "start",
                  variant: "borderless",
                  shape: "corner",
                  avatar: <Avatar icon={<RobotOutlined />} style={{ background: "#e8f3ff", color: "#075ee6" }} />
                },
                user: {
                  placement: "end",
                  variant: "filled",
                  shape: "corner",
                  avatar: <Avatar icon={<UserOutlined />} style={{ background: "#075ee6", color: "#fff" }} />
                }
              }}
            />
          ) : (
            <div className="agent-x-welcome-stage">
              <Welcome
                variant="borderless"
                icon={(
                  <Avatar
                    size={54}
                    icon={agent?.isPpt ? <FilePptOutlined /> : <RobotOutlined />}
                    className="agent-x-welcome-avatar"
                  />
                )}
                title={`欢迎使用 ${agent?.label || "智能体"}`}
                description="基于 Ant Design X 的智能对话工作台。选择一个建议，或直接输入你的目标。"
                extra={(
                  <Space size={6}>
                    <Button type="text" icon={<ProjectOutlined />} aria-label="智能体工作区" />
                    <Button type="text" icon={<MoreOutlined />} aria-label="更多操作" />
                  </Space>
                )}
              />
              <Prompts
                title="我可以帮你："
                items={promptItems}
                wrap
                fadeIn
                fadeInLeft
                onItemClick={({ data }) => {
                  if (typeof data.label === "string") submit(data.label);
                }}
              />
            </div>
          )}
          <div className="agent-x-composer">
            <div className="agent-x-quick-actions">
              {(agent?.tools || []).slice(0, 4).map((tool) => (
                <Button key={tool} size="small" onClick={() => setValue(`请使用${tool}：`)}>
                  {tool}
                </Button>
              ))}
            </div>
            <Sender
              value={value}
              loading={loading}
              placeholder="输入消息，Enter 发送"
              autoSize={{ minRows: 1, maxRows: 5 }}
              prefix={<Button type="text" icon={<PaperClipOutlined />} aria-label="添加附件" />}
              onChange={setValue}
              onSubmit={submit}
              onCancel={() => setLoading(false)}
            />
          </div>
        </main>
      </div>
      <PptDeckBuilder open={pptBuilderOpen} agent={agent} onClose={() => setPptBuilderOpen(false)} />
    </Modal>
  );
}

const SKILLS_STORAGE_KEY = "clink-ai-skills-v1";
const BUILTIN_SKILLS = [
  { id: "rag-search", name: "RAG 检索", category: "知识处理", description: "检索已挂载知识库并返回带来源的上下文。", source: "Clink AI", version: "1.0.0", icon: "book", enabled: true, builtin: true },
  { id: "document-editor", name: "文件编辑", category: "内容创作", description: "读取、整理与改写常用知识库文档。", source: "Clink AI", version: "1.0.0", icon: "edit", enabled: true, builtin: true },
  { id: "ppt-builder", name: "PPT 生成", category: "内容创作", description: "生成演示文稿大纲、页面内容并导出 PPTX。", source: "Clink AI", version: "1.1.0", icon: "ppt", enabled: true, builtin: true },
  { id: "data-analysis", name: "数据分析", category: "数据工具", description: "分析结构化数据并提炼趋势和结论。", source: "Clink AI", version: "1.0.0", icon: "chart", enabled: true, builtin: true },
  { id: "web-reader", name: "网页读取", category: "网络工具", description: "读取公开网页内容并整理为结构化资料。", source: "Clink AI", version: "1.0.0", icon: "global", enabled: false, builtin: true },
  { id: "code-helper", name: "代码说明", category: "开发工具", description: "解释代码、定位问题并生成修改建议。", source: "Clink AI", version: "1.0.0", icon: "code", enabled: true, builtin: true }
];

function readSkills() {
  try {
    const stored = JSON.parse(localStorage.getItem(SKILLS_STORAGE_KEY) || "[]");
    const state = new Map(Array.isArray(stored) ? stored.map((item) => [item.id, item]) : []);
    return [
      ...BUILTIN_SKILLS.map((item) => {
        const saved = state.get(item.id);
        return saved?.deleted ? null : { ...item, ...saved, builtin: true, deleted: false };
      }),
      ...(Array.isArray(stored) ? stored.filter((item) => !item.builtin && !item.deleted && !BUILTIN_SKILLS.some((preset) => preset.id === item.id)) : [])
    ].filter(Boolean);
  } catch (error) {
    return BUILTIN_SKILLS;
  }
}

function persistSkills(items) {
  let deleted = [];
  try {
    const stored = JSON.parse(localStorage.getItem(SKILLS_STORAGE_KEY) || "[]");
    deleted = Array.isArray(stored)
      ? stored.filter((item) => item.deleted && !items.some((next) => next.id === item.id))
      : [];
  } catch (error) {
    deleted = [];
  }
  localStorage.setItem(SKILLS_STORAGE_KEY, JSON.stringify([...items, ...deleted]));
  window.dispatchEvent(new CustomEvent("skills-library-updated"));
}

function AgentSkillSelector() {
  const [skills, setSkills] = useState(readSkills);
  const [selected, setSelected] = useState(() => window.__WORKBENCH_SELECTED_AGENT__?.tools || []);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [status, setStatus] = useState("enabled");

  useEffect(() => {
    const syncLibrary = () => setSkills(readSkills());
    const syncAgent = (event) => setSelected(Array.isArray(event.detail?.tools) ? event.detail.tools : []);
    window.addEventListener("skills-library-updated", syncLibrary);
    window.addEventListener("storage", syncLibrary);
    window.addEventListener("workbench-selected-agent-sync", syncAgent);
    return () => {
      window.removeEventListener("skills-library-updated", syncLibrary);
      window.removeEventListener("storage", syncLibrary);
      window.removeEventListener("workbench-selected-agent-sync", syncAgent);
    };
  }, []);

  const categories = [...new Set(skills.map((item) => item.category).filter(Boolean))];
  const normalizedQuery = query.trim().toLocaleLowerCase();
  const visible = skills.filter((skill) => {
    const matchesQuery = !normalizedQuery
      || `${skill.name} ${skill.description} ${skill.category}`.toLocaleLowerCase().includes(normalizedQuery);
    const matchesCategory = category === "all" || skill.category === category;
    const matchesStatus = status === "all" || (status === "enabled") === Boolean(skill.enabled);
    return matchesQuery && matchesCategory && matchesStatus;
  });

  const toggle = (skill, checked) => {
    if (!skill.enabled) return;
    const next = checked
      ? [...new Set([...selected, skill.name])]
      : selected.filter((name) => name !== skill.name);
    if (!next.length) {
      message.warning("请至少保留一个可调用 Skill");
      return;
    }
    setSelected(next);
    window.dispatchEvent(new CustomEvent("workbench-agent-skills-change", { detail: { tools: next } }));
  };

  return (
    <div className="agent-skill-selector">
      <Input
        allowClear
        size="small"
        prefix={<SearchOutlined />}
        placeholder="搜索可调用 Skills"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      <div className="agent-skill-filters">
        <Select
          size="small"
          value={category}
          onChange={setCategory}
          options={[{ value: "all", label: "全部分类" }, ...categories.map((item) => ({ value: item, label: item }))]}
        />
        <Select
          size="small"
          value={status}
          onChange={setStatus}
          options={[
            { value: "all", label: "全部状态" },
            { value: "enabled", label: "已启用" },
            { value: "disabled", label: "已停用" }
          ]}
        />
      </div>
      <div className="agent-skill-options" role="group" aria-label="可调用工具 Skills">
        {visible.length ? visible.map((skill) => (
          <label className={`agent-skill-option${skill.enabled ? "" : " disabled"}`} key={skill.id}>
            <Checkbox
              checked={selected.includes(skill.name)}
              disabled={!skill.enabled}
              onChange={(event) => toggle(skill, event.target.checked)}
            />
            <span className="agent-skill-option-copy">
              <b>{skill.name}</b>
              <small>{skill.category}</small>
            </span>
            <Tag color={skill.enabled ? "processing" : "default"}>{skill.enabled ? "可调用" : "已停用"}</Tag>
          </label>
        )) : <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="没有匹配的 Skill" />}
      </div>
    </div>
  );
}

function SkillIcon({ type }) {
  const icons = {
    book: <BookOutlined />, edit: <EditOutlined />, ppt: <FilePptOutlined />,
    chart: <BarChartOutlined />, global: <GlobalOutlined />, code: <CodeOutlined />
  };
  return icons[type] || <ToolOutlined />;
}

function SkillsManager() {
  const [skills, setSkills] = useState(readSkills);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [status, setStatus] = useState("all");
  const [open, setOpen] = useState(false);
  const [detailSkill, setDetailSkill] = useState(null);
  const [editSkill, setEditSkill] = useState(null);
  const [form] = Form.useForm();
  const [editForm] = Form.useForm();
  useEffect(() => {
    const closeOnTabChange = (event) => {
      if (event.detail?.tab !== "skills") {
        setOpen(false);
        setDetailSkill(null);
        setEditSkill(null);
      }
    };
    window.addEventListener("workbench-tab-change", closeOnTabChange);
    return () => window.removeEventListener("workbench-tab-change", closeOnTabChange);
  }, []);
  const categories = [...new Set(skills.map((item) => item.category))];
  const visible = skills.filter((item) => {
    const text = `${item.name} ${item.description} ${item.source}`.toLowerCase();
    return text.includes(query.trim().toLowerCase())
      && (category === "all" || item.category === category)
      && (status === "all" || (status === "enabled") === Boolean(item.enabled));
  });
  const update = (next) => {
    setSkills(next);
    persistSkills(next);
  };
  const addSkill = async () => {
    const values = await form.validateFields();
    const next = {
      id: `custom-${Date.now()}`,
      name: values.name.trim(),
      category: values.category,
      description: values.description.trim(),
      source: values.repository.trim(),
      repository: values.repository.trim(),
      version: values.version?.trim() || "1.0.0",
      icon: "tool",
      enabled: true,
      builtin: false
    };
    update([...skills, next]);
    setOpen(false);
    form.resetFields();
    message.success("Skill 已添加");
  };
  const removeSkill = (skill) => {
    Modal.confirm({
      title: `删除 ${skill.name}？`,
      content: "该 Skill 将从当前工作台移除，不会修改它的来源仓库。",
      okText: "删除",
      okButtonProps: { danger: true },
      cancelText: "取消",
      centered: true,
      onOk: () => {
        const next = skills.filter((item) => item.id !== skill.id);
        setSkills(next);
        persistSkills(skill.builtin ? [...next, { ...skill, deleted: true }] : next);
        message.success("Skill 已删除");
      }
    });
  };
  const openEditor = (skill) => {
    setEditSkill(skill);
    editForm.setFieldsValue({
      name: skill.name,
      category: skill.category,
      description: skill.description,
      source: skill.repository || skill.source,
      version: skill.version
    });
  };
  const saveEdit = async () => {
    const values = await editForm.validateFields();
    const next = skills.map((item) => item.id === editSkill.id ? {
      ...item,
      name: values.name.trim(),
      category: values.category,
      description: values.description.trim(),
      source: values.source.trim(),
      repository: item.builtin ? item.repository : values.source.trim(),
      version: values.version?.trim() || "1.0.0"
    } : item);
    update(next);
    setEditSkill(null);
    message.success("Skill 已更新");
  };
  return (
    <div className="skills-manager-shell">
      <header className="skills-manager-header">
        <div>
          <span className="skills-manager-kicker"><SafetyCertificateOutlined /> Agent Skills</span>
          <h1>工具 Skills</h1>
          <p>{skills.filter((item) => item.enabled).length} 个已启用 · {skills.length} 个已安装</p>
        </div>
        <Button type="primary" icon={<PlusOutlined />} onClick={() => setOpen(true)}>从 GitHub 添加</Button>
      </header>
      <div className="skills-manager-toolbar">
        <Input allowClear prefix={<SearchOutlined />} placeholder="搜索 Skills" value={query} onChange={(event) => setQuery(event.target.value)} />
        <Select value={category} onChange={setCategory} options={[{ value: "all", label: "全部分类" }, ...categories.map((item) => ({ value: item, label: item }))]} />
        <Select value={status} onChange={setStatus} options={[{ value: "all", label: "全部状态" }, { value: "enabled", label: "已启用" }, { value: "disabled", label: "已停用" }]} />
      </div>
      {visible.length ? (
        <div className="skills-manager-grid">
          {visible.map((skill) => (
            <article className={`skills-manager-card${skill.enabled ? " enabled" : ""}`} key={skill.id} style={{ borderRadius: 12 }}>
              <div className="skills-manager-card-top">
                <span className="skills-manager-icon"><SkillIcon type={skill.icon} /></span>
                <Switch checked={skill.enabled} onChange={(checked) => update(skills.map((item) => item.id === skill.id ? { ...item, enabled: checked } : item))} aria-label={`${skill.name}启用状态`} />
              </div>
              <div className="skills-manager-card-title">
                <h2>{skill.name}</h2>
                <Tag color={skill.builtin ? "blue" : "geekblue"}>{skill.builtin ? "内置" : "GitHub"}</Tag>
              </div>
              <p>{skill.description}</p>
              <div className="skills-manager-meta"><span>{skill.category}</span><span>v{skill.version}</span></div>
              <footer>
                <Space className="skills-manager-actions" size={2}>
                  <Button type="text" size="small" icon={<ReadOutlined />} onClick={() => setDetailSkill(skill)}>详情</Button>
                  <Button type="text" size="small" icon={<EditOutlined />} onClick={() => openEditor(skill)}>编辑</Button>
                  <Button type="text" size="small" danger icon={<DeleteOutlined />} onClick={() => removeSkill(skill)}>删除</Button>
                </Space>
              </footer>
            </article>
          ))}
        </div>
      ) : <Empty description="没有匹配的 Skill" />}
      <Modal title="从 GitHub 添加 Skill" open={open} onOk={addSkill} onCancel={() => setOpen(false)} okText="添加" cancelText="取消" centered destroyOnHidden>
        <Form form={form} layout="vertical" initialValues={{ category: "开发工具", version: "1.0.0" }}>
          <Form.Item label="Skill 名称" name="name" rules={[{ required: true, message: "请输入 Skill 名称" }]}><Input placeholder="例如：网页摘要" /></Form.Item>
          <Form.Item label="GitHub 仓库" name="repository" rules={[{ required: true, type: "url", message: "请输入有效的 GitHub 地址" }, { pattern: /^https:\/\/github\.com\//i, message: "目前仅支持 GitHub 仓库" }]}><Input prefix={<GithubOutlined />} placeholder="https://github.com/owner/repository" /></Form.Item>
          <Form.Item label="分类" name="category" rules={[{ required: true }]}><Select options={[...categories, "知识处理", "内容创作", "数据工具", "网络工具", "开发工具"].filter((item, index, list) => list.indexOf(item) === index).map((item) => ({ value: item, label: item }))} /></Form.Item>
          <Form.Item label="简介" name="description" rules={[{ required: true, message: "请输入简介" }]}><Input.TextArea rows={3} maxLength={120} showCount /></Form.Item>
          <Form.Item label="版本" name="version"><Input /></Form.Item>
        </Form>
      </Modal>
      <Modal title="Skill 详情" open={Boolean(detailSkill)} onCancel={() => setDetailSkill(null)} footer={<Button type="primary" onClick={() => setDetailSkill(null)}>关闭</Button>} centered destroyOnHidden>
        {detailSkill && (
          <div className="skills-detail">
            <div className="skills-detail-heading">
              <span className="skills-manager-icon"><SkillIcon type={detailSkill.icon} /></span>
              <div><h2>{detailSkill.name}</h2><p>{detailSkill.description}</p></div>
            </div>
            <Descriptions column={1} bordered size="small" items={[
              { key: "status", label: "状态", children: <Tag color={detailSkill.enabled ? "success" : "default"}>{detailSkill.enabled ? "已启用" : "已停用"}</Tag> },
              { key: "category", label: "分类", children: detailSkill.category },
              { key: "version", label: "版本", children: `v${detailSkill.version}` },
              { key: "type", label: "类型", children: detailSkill.builtin ? "内置 Skill" : "GitHub Skill" },
              { key: "source", label: "来源", children: detailSkill.source }
            ]} />
          </div>
        )}
      </Modal>
      <Modal title="编辑 Skill" open={Boolean(editSkill)} onOk={saveEdit} onCancel={() => setEditSkill(null)} okText="保存" cancelText="取消" centered destroyOnHidden>
        <Form form={editForm} layout="vertical">
          <Form.Item label="Skill 名称" name="name" rules={[{ required: true, message: "请输入 Skill 名称" }]}><Input /></Form.Item>
          <Form.Item label="分类" name="category" rules={[{ required: true, message: "请选择分类" }]}><Select showSearch options={[...categories, "知识处理", "内容创作", "数据工具", "网络工具", "开发工具"].filter((item, index, list) => list.indexOf(item) === index).map((item) => ({ value: item, label: item }))} /></Form.Item>
          <Form.Item label="简介" name="description" rules={[{ required: true, message: "请输入简介" }]}><Input.TextArea rows={3} maxLength={120} showCount /></Form.Item>
          <Form.Item label="来源 / GitHub 仓库" name="source" rules={[{ required: true, message: "请输入来源" }]}><Input prefix={editSkill?.builtin ? <ToolOutlined /> : <GithubOutlined />} /></Form.Item>
          <Form.Item label="版本" name="version"><Input /></Form.Item>
        </Form>
      </Modal>
    </div>
  );
}

function UserArea() {
  const [session, setSession] = useState(window.__WORKBENCH_AUTH_SESSION__ || null);

  useEffect(() => {
    const syncSession = (event) => setSession(event.detail || null);
    window.addEventListener("workbench-auth-session-sync", syncSession);
    return () => window.removeEventListener("workbench-auth-session-sync", syncSession);
  }, []);

  const isAdmin = session?.role === "管理员";
  const menu = {
    items: [
      { key: "profile", icon: <UserOutlined />, label: "当前登录成员" },
      ...(isAdmin ? [{ key: "admin", icon: <DashboardOutlined />, label: "后台管理" }] : []),
      { type: "divider" },
      { key: "logout", icon: <LogoutOutlined />, label: "退出登录", danger: true }
    ],
    onClick: ({ key }) => {
      if (key === "admin") document.getElementById("topbarAdminBtn")?.click();
      if (key === "logout") document.getElementById("topbarLogoutBtn")?.click();
    }
  };
  return (
    <Dropdown menu={menu} trigger={["click"]}>
      <Button className="workbench-user-button" type="text">
        <Avatar size={28} icon={<UserOutlined />} />
        <span>{session?.role || "成员"}</span>
        <DownOutlined />
      </Button>
    </Dropdown>
  );
}

function mount(id, Component) {
  const node = document.getElementById(id);
  if (!node) return;
  createRoot(node).render(<ConfigProvider theme={theme}><App><Component /></App></ConfigProvider>);
}

mount("antdTopbarSettings", TopbarSettings);
mount("antdModelAvailabilityNotice", ModelAvailabilityNotice);
mount("antdAgentSearch", AgentSearch);
mount("antdAgentFilters", AgentFilters);
mount("antdAgentViewSwitch", AgentViewSwitch);
mount("antdAgentCategorySelect", AgentCategorySelect);
mount("antdAgentModelSelect", AgentModelSelect);
mount("antdAgentKnowledgeSelect", AgentKnowledgeSelect);
mount("agentInsightTags", AgentSkillSelector);
mount("antdAgentInsightActions", AgentInsightActions);
mount("agentBoardList", AgentCategoryBoard);
mount("antdAgentCategoryActions", AgentCategoryActions);
mount("statAgentIcon", () => <StatIcon type="total" />);
mount("statActiveAgentIcon", () => <StatIcon type="active" />);
mount("statConversationIcon", () => <StatIcon type="conversations" />);
mount("statApiCallIcon", () => <StatIcon type="calls" />);
mount("statUserIcon", () => <StatIcon type="users" />);
mount("antdUserArea", UserArea);
mount("antdAgentChat", AgentChatModal);
mount("antdSkillsManager", SkillsManager);
