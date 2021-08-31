<template>
  <div>
    <div>
      <slot name="call" />
      （電話持ってます？）
    </div>
    <div>
      <slot name="mail" />
      （メールできます？）
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
</style>
