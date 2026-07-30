<template>
  <el-table :data="list" style="width: 100%;padding-top: 15px;">
    <el-table-column :label="text.orderNo" min-width="200">
      <template slot-scope="scope">
        {{ scope.row.order_no | orderNoFilter }}
      </template>
    </el-table-column>
    <el-table-column :label="text.price" width="195" align="center">
      <template slot-scope="scope">
        ¥{{ scope.row.price | toThousandFilter }}
      </template>
    </el-table-column>
    <el-table-column :label="text.status" width="100" align="center">
      <template slot-scope="{row}">
        <el-tag :type="row.status | statusFilter">
          {{ statusText(row.status) }}
        </el-tag>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { transactionList } from '@/api/remote-search'
import { getLanguage, LangChangeEvent, t } from '@/utils/lang'

export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        success: 'success',
        pending: 'danger'
      }
      return statusMap[status]
    },
    orderNoFilter(str) {
      return str.substring(0, 30)
    }
  },
  data() {
    return {
      list: null,
      lang: getLanguage()
    }
  },
  computed: {
    text() {
      return {
        orderNo: t('orderNo', this.lang),
        price: t('price', this.lang),
        status: t('status', this.lang)
      }
    }
  },
  created() {
    this.fetchData()
  },
  mounted() {
    window.addEventListener(LangChangeEvent, this.handleLanguageChange)
  },
  beforeDestroy() {
    window.removeEventListener(LangChangeEvent, this.handleLanguageChange)
  },
  methods: {
    statusText(status) {
      return t(status, this.lang)
    },
    handleLanguageChange(event) {
      this.lang = event.detail || getLanguage()
    },
    fetchData() {
      transactionList().then(response => {
        this.list = response.data.items.slice(0, 8)
      })
    }
  }
}
</script>
