<template>
  <main class="flex flex-col bg-redd-950 gap-8">
    <LayoutHeader />
    <div class="flex">
      <LayoutChatComponent />
      <slot />
      <LayoutFriendsComponent />
    </div>
  </main>
</template>
