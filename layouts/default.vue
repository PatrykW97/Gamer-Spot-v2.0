<template>
  <main class="flex flex-col bg-redd-950">
    <LayoutHeader />
    <div class="flex justify-between">
      <LayoutChatComponent />
      <slot />
      <LayoutFriendsComponent />
    </div>
  </main>
</template>
