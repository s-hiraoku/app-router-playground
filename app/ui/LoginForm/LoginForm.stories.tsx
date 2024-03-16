import { Meta, StoryObj } from "@storybook/react"
import { LoginForm } from "./LoginForm"

export default {
  component: LoginForm,
} as Meta<typeof LoginForm>


export const Default: StoryObj<typeof LoginForm> = {
     args: {},
  }
