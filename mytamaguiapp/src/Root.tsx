import '@tamagui/core/reset.css'
import '@tamagui/polyfill-dev'
import { TamaguiProvider, Theme, XStack } from 'tamagui'

import config from './tamagui.config'
import Preview from './components/Preview';

export default function Root() {
  return (
    <TamaguiProvider config={config} defaultTheme="light">
      <XStack f={1} ai='flex-start'>
        <Theme name="light">
          <Preview themeName = "light"/>
        </Theme>
        <Theme name="dark">
          <Preview themeName = "dark"/>
        </Theme>
      </XStack>
    </TamaguiProvider>
  )
}
