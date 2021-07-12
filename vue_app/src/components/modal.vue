<template>
  <transition name="modal">
    <div class="modal-mask">
      <div :class="['modal-wrapper', width]">
        <div class="modal-container">
          <div class="modal-header">
            <slot name="header">
              default header
            </slot>
            <button class="modal-default-button btn btn-danger btn-rounded" @click="$emit('close')">&times;</button>
          </div>

          <div class="modal-body">
            <slot name="body">
              default body
            </slot>
          </div>

          <div class="modal_footer">
            <slot name="footer">
              default footer
              <button class="modal-default-button" @click="$emit('close')">
                OK
              </button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<style lang="scss">
@import "../assets/css/modal";
</style>

<script>
export default {
  name:'modal',
  props:{
    width:{
      type:String,
      default:''
    }
  }
};
</script>