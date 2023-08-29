import { Button, YStack, Card, H1, H2, useTheme } from 'tamagui'

export default function Preview({ themeName }) {
  const theme = useTheme()
  console.log(themeName, theme)
  return (
      <YStack f={1} height='100vh' bg={themeName === 'light' ? 'white' : 'black'} ai='center'>
        <Card>
          <H1>Learn Tamagui</H1>
        </Card>
        <H2>{themeName} mode</H2>
        <Button>Button</Button>
      </YStack>
  )
}
