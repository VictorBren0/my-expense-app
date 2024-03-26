import "@/libs/dayjs"

import { Slot } from "expo-router"
import { StatusBar } from "expo-status-bar"
import * as SplashScreen from "expo-splash-screen"
import { GestureHandlerRootView } from "react-native-gesture-handler"

import {
  useFonts,
  OpenSans_700Bold,
  OpenSans_400Regular,
  OpenSans_600SemiBold,
} from "@expo-google-fonts/open-sans"

import { theme } from "../theme"
import { SQLiteProvider } from "expo-sqlite/next"
import { ThemeProvider } from "styled-components"
import { databaseInit } from "@/database/databaseInit"

SplashScreen.preventAutoHideAsync()

export default function Layout() {
  const [fontsLoaded] = useFonts({
    OpenSans_600SemiBold,
    OpenSans_400Regular,
    OpenSans_700Bold,
  })

  if (fontsLoaded) {
    SplashScreen.hideAsync()
  } else {
    return
  }

  return (
    <GestureHandlerRootView
      style={{ flex: 1, backgroundColor: theme.colors.gray_900 }}
    >
      <StatusBar style="light" />
      <ThemeProvider theme={theme}>
      <SQLiteProvider databaseName="expense.db" onInit={databaseInit}>
        <Slot />
      </SQLiteProvider>
      </ThemeProvider>
    </GestureHandlerRootView>
  )
}