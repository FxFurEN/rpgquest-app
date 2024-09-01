'use client'

import { Tabbar } from '@telegram-apps/telegram-ui'
import { TabbarItem } from '@telegram-apps/telegram-ui/dist/components/Layout/Tabbar/components/TabbarItem/TabbarItem'
import { useState } from 'react'

interface Tab {
	id: string
	text: string
}

interface TabMenuProps {
	tabs: Tab[]
}

const TabMenu: React.FC<TabMenuProps> = ({ tabs }) => {
	const [currentTab, setCurrentTab] = useState(tabs[0].id)

	return (
		<Tabbar>
			{tabs.map(({ id, text }) => (
				<TabbarItem
					key={id}
					text={text}
					selected={id === currentTab}
					onClick={() => setCurrentTab(id)}
				></TabbarItem>
			))}
		</Tabbar>
	)
}

export default TabMenu
