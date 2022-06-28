<template>
    <b-container fluid="xl">
      <router-view />
    </b-container>
</template>

<script>
export default {
  name: 'DefaultLayout',
  components: {
    
  },
  data() {
      return {
        fields: ['no', '제목', '등록일'],
        items: [
          { no: 1, 제목: '전자증권 전환 대상 주권 권리자(주주) 보호 및 조치사항 안내', 등록일: '2020-10-20 09:21:54' },
          { no: 2, 제목: '[위드네트웍스] G-PRIVACY 2020 참가 후기', 등록일: '2020-10-20 09:21:54' },
          { no: 3, 제목: '위드네트웍스, 포티넷 채널데이 2020에서 3관왕을 했습니다!', 등록일: '2020-10-20 09:21:54' }
        ]
      }
    }
}
</script>