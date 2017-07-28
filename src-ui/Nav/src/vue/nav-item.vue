<script>
  import tagMixin from '@/mixins/tag'
  import navItemMixin from './../mixins/nav-item'
  
  export default {
    name: 'uNavItem',
    props: {
      tag: {
        default: 'li'
      }
    },
    mixins: [tagMixin, navItemMixin],
    render (h) {
      const { tag, tagProps, navItemClasses, $slots } = this

      return h(tag, {
        class: navItemClasses,
        props: tagProps
      }, $slots.default)
    }
  }
</script>
