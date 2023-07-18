<template>
  <HeaderComponent title="MIPS Studio" subtitle="一站式 MIPS 集成开发环境" />
  <div class="main">
    <div class="startup">
      <a class="main-subtitle">启动向导</a>
      <button class="button" @click="$router.push({ name: 'newproject' })">
        <img class="button-icon" alt="Vue logo" src="@/assets/AddToCollection_16x.svg">
        <a>新建项目</a>
      </button>
      <button class="button" @click="openProject()">
        <img class="button-icon" alt="Vue logo" src="@/assets/OpenFileFromProject_16x.svg">
        <a>打开项目</a>
      </button>
      <button class="button" @click="doc()">
        <img class="button-icon" alt="Vue logo" src="@/assets/CloudSearch_16x.svg">
        <a>查询用户文档</a>
      </button>
    </div>
    <div class="history">
      <a class="main-subtitle">最近项目</a>
      <ul>
        <li v-for="todo in todos" :key="todo.id">
          {{ todo.text }}
        </li>
      </ul>
    </div>
  </div>
  <div class="footer">
    <a class="footer-text">© 2023 上海芯联芯智能科技有限公司</a>
  </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue';
const { dialog, shell } = require('electron').remote;
import * as child_process from 'child_process';

let id = 0;
export default {
  data() {
    return {
      newTodo: '',
      todos: [
        { id: id++, text: 'Learn HTML' },
        { id: id++, text: 'Learn JavaScript' },
        { id: id++, text: 'Learn Vue' }
      ],
    }
  },
  methods: {
    doc() {
      shell.openExternal('https://www.cipunited.com')
        .then(() => console.log('opened!'))
        .catch((reson) => console.error(reson));
    },
    openProject() {
      const dir = dialog.showOpenDialogSync({ properties: ['openDirectory'] });
      child_process.exec(`vscode ${dir[0]}`)
    }
  },
  components: { HeaderComponent },
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title {
  font-size: 48px;
  color: #705697;
  margin: 0;
  line-height: 40px;
}

.subtitle {
  font-size: 16px;
  line-height: 23px;
  margin: 0;
  font-style: normal;
  font-weight: 400;
}

.main-subtitle {
  margin-bottom: 16px;
  line-height: 23px;
}

.main {
  display: flex;
  column-gap: 105px;
  column-count: 2;
}

.startup {
  display: flex;
  flex-flow: column;
  column-gap: 14px;
}

.startup .button {
  /* position: absolute; */
  width: 276px;
  height: 48px;
  background: #EDE8EF;
  border: none;
  margin: 0;
  text-align: justify;
  margin-bottom: 14px;
  font-size: 24px;
  align-items: center;
  display: flex;
  column-gap: 15px;
}

.button:hover {
  background: #E0C5EA;
}

.history {
  display: flex;
  flex-flow: column;
  min-width: 310px;
}

.history>ul {
  margin: 0;
  display: flex;
  flex-flow: column;
  margin-left: 20px;
  padding: 0;
}

li {
  padding-left: 12px;
  list-style: "⯈";
  font-size: 14px;
  line-height: 20px;
}


.button-icon {
  width: 28px;
  margin-left: 9px;
}
</style>
