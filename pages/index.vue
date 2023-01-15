<script setup>
  console.log(useAuth().user);

  const { user } = useAuth();
</script>

<template>
  <div>
    {{ user }}
    <NuxtLink to="/auth/login">
      Log in with discord
    </NuxtLink>
    <NuxtWelcome />
  </div>
</template>
