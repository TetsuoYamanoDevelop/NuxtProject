<template>
  <div>
    <p>
      <Contact>
        <template #call>
          <callSVG />
          お電話でのお問い合わせ
        </template>
        <template #mail>
          <mailSVG />
          メールでのお問い合わせ
        </template>
      </Contact>
    </p>
  </div>
</template>

<script>
import Contact from '~/components/Contact.vue'
import callSVG from '@/assets/images/svg/call_icon.svg'
import mailSVG from '@/assets/images/svg/mail_icon.svg'

export default {
  components: {
    Contact,
    callSVG,
    mailSVG
  }
}
</script>

<style scoped>

</style>
