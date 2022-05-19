import {
  ComponentStoryObj,
  ComponentMeta,
  ComponentStory,
} from "@storybook/react";

import { CardAnchor } from "./CardAnchor";

export default {
  component: CardAnchor,
} as ComponentMeta<typeof CardAnchor>;

const Template: ComponentStory<typeof CardAnchor> = (args) => (
  <CardAnchor {...args} />
);

export const Basic = Template.bind({});
Basic.args = { title: "タイトル", description: "説明文", href: "/" };
