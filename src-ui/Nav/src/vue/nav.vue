<style src="./../../index.css"></style>

<script>
  import tagMixin from '@/mixins/tag'
  import navMixin from './../mixins/nav'
  
  export default {
    name: 'uNav',
    props: {
      tag: {
        default: 'ul'
      }
    },
    mixins: [tagMixin, navMixin],
    render (h) {
      const { tag, tagProps, navClasses, $slots } = this

      return h(tag, {
        class: navClasses,
        props: tagProps
      }, $slots.default)
    }
  }
</script>
