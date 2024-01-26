import { Meta, StoryObj } from "@storybook/react"
import { Sidebar } from "./Sidebar"

export default {
  component: Sidebar,
} as Meta<typeof Sidebar>


export const Default: StoryObj<typeof Sidebar> = {
     args: {},
  }
