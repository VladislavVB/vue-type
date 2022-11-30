<template>
  <Teleport to="body">
    <Transition name="modal-other">
      <div
        @click.stop="closeModal()"
        v-if="props.modelValue"
        class="absolute w-full bg-black bg-opacity-40 h-screen top-0 left-0 flex justify-center px-8"
      >
        <div
          @click.stop=""
          class="p-4 bg-white self-start mt-32 max-w-screen-md"
        >
          <slot />
          <button
            @click.stop="closeModal()"
            class="text-white mt-8 bg-weather-primary py-2 px-6"
          >
            Close
          </button>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
})

const emits = defineEmits(['update:modelValue'])

const closeModal = () => {
  emits('update:modelValue', false)
}
</script>
<style scoped>
.modal-other-enter-active,
.modal-other-leave-active {
  transform: opacity 1.3s;
}

.modal-other-enter-from,
.modal-other-leave-from {
  opacity: 0;
}
</style>
