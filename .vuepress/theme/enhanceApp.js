import Chakra, {
  internalIcons,
  defaultTheme,
  parsePackIcons
} from "@chakra-ui/vue"
import { faHandHoldingHeart } from "@fortawesome/free-solid-svg-icons"

export default ({
  Vue,
  options,
  router,
  siteData,
  isServer //
}) => {
  Vue.use(Chakra)
  Vue.mixin({
    provide() {
      return {
        $chakraTheme: () => defaultTheme,
        $chakraColorMode: () => this.colorMode,
        $toggleColorMode: this.toggleColorMode,
        $chakraIcons: {
          ...internalIcons,
          ...parsePackIcons({ faHandHoldingHeart })
        }
      }
    },
    methods: {
      toggleColorMode() {
        this.colorMode = this.colorMode === "light" ? "dark" : "light"
      }
    }
  })
}
