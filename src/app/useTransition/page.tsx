"use client";
import { useState } from "react";
import TabButton from "./TabButton";
import AboutTab from "./AboutTab";
import PostsTab from "./PostsTab";
import ContactTab from "./ContactTab";

export default function TabContainer() {
  const [tab, setTab] = useState("about");

  function selectTab(nextTab: string) {
    setTab(nextTab);
  }

  return (
    <>
      <p>
        点击 “Posts”, 然后立即点击 “Contact”。请注意, 这会中断 “Posts”
        的缓慢渲染, 而 “Contact” 选项卡将会立即显示。因为此状态更新被标记为
        transition, 所以缓慢的重新渲染不会冻结用户界面.
      </p>
      <TabButton isActive={tab === "about"} onClick={() => selectTab("about")}>
        About
      </TabButton>
      <TabButton isActive={tab === "posts"} onClick={() => selectTab("posts")}>
        Posts (slow)
      </TabButton>
      <TabButton
        isActive={tab === "contact"}
        onClick={() => selectTab("contact")}
      >
        Contact
      </TabButton>
      <hr />
      {tab === "about" && <AboutTab />}
      {tab === "posts" && <PostsTab />}
      {tab === "contact" && <ContactTab />}
    </>
  );
}
