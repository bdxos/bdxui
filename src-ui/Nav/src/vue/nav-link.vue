<script>
  import tagMixin from '@/mixins/tag'
  import navLinkMixin from './../mixins/nav-link'
  
  export default {
    name: 'uNavLink',
    props: {
      tag: {
        default: 'a'
      }
    },
    mixins: [tagMixin, navLinkMixin],
    render (h) {
      const { tag, tagProps, navLinkClasses, $slots } = this

      return h(tag, {
        class: navLinkClasses,
        props: tagProps
      }, $slots.default)
    }
  }
</script>
