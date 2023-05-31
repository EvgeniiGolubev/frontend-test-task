<template>
  <div class="page-container">
    <div class="column">
      <h2>Список пользователей</h2>
      <el-table :data="userList" border v-loading="loading">
        <el-table-column prop="id" label="ID"></el-table-column>
        <el-table-column prop="name" label="Имя"></el-table-column>
        <el-table-column prop="role" label="Роль"></el-table-column>
        <el-table-column prop="ctime" label="Дата создания">
          <template v-slot="scope">
            {{ formatDate(scope.row.ctime) }}
          </template>
        </el-table-column>
        <el-table-column label="Действия">
          <template v-slot="scope">
            <el-button type="danger" @click="deleteUser(scope.row.id)">Удалить</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
          :total="totalUsers"
          :current-page="currentPage"
          :page-size="pageSize"
          @current-change="handlePageChange"
      ></el-pagination>
    </div>
    <div class="column">
      <h2>Список событий</h2>
      <el-table :data="eventList" border>
        <el-table-column prop="time" label="Время">
          <template v-slot="scope">
            {{ formatDate(scope.row.time) }}
          </template>
        </el-table-column>
        <el-table-column prop="event" label="Событие"></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import axios from "axios"
import { ref } from 'vue'

export default {
  data() {
    return {
      userList: [], // Список пользователей
      totalUsers: 0, // Общее количество пользователей
      currentPage: 1, // Текущая страница пагинации
      pageSize: 5, // Количество выводимых записей на странице
      eventList: [], // Список событий
      loading: ref(true), // Флаг загрузки данных
    }
  },
  mounted() {
    this.fetchUserList()

    this.$options.sockets.onmessage = (event) => {
      const eventData = JSON.parse(event.data)
      this.eventList.unshift({
        time: eventData.ctime,
        event: eventData.event,
      })
    }
  },
  methods: {
    fetchUserList() {
      this.loading = ref(true)

      axios.get('https://test.relabs.ru/api/users/list',
          { params: { limit: this.pageSize, offset: (this.currentPage - 1) * this.pageSize } })
        .then(response => {
          this.userList = response.data.items;
          this.totalUsers = response.data.total;
        })
        .catch(error => {
          console.error(error);
        })

      this.loading = ref(false)
    },
    deleteUser(userId) {
      this.userList = this.userList.filter(user => user.id !== userId)
    },
    handlePageChange(page) {
      this.currentPage = page
      this.fetchUserList()
    },
    formatDate(timestamp) {
      if (isNaN(timestamp)) return ''

      const date = new Date(timestamp * 1000)
      const day = date.getDate().toString().padStart(2, '0')
      const month = (date.getMonth() + 1).toString().padStart(2, '0')
      const year = date.getFullYear()
      const hours = date.getHours().toString().padStart(2, '0')
      const minutes = date.getMinutes().toString().padStart(2, '0')

      return `${day}.${month}.${year} ${hours}:${minutes}`
      },
  },
}
</script>

<style>
.page-container {
  display: flex;
}

.column {
  flex: 1;
  margin-right: 10px;
}
</style>