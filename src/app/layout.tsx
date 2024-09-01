import type { Metadata } from 'next'
import Script from 'next/script'
import type { PropsWithChildren } from 'react'

import { Root } from '@/components/Root/Root'

import TabMenu from '@/components/tab-menu'
import '@telegram-apps/telegram-ui/dist/styles.css'
import 'normalize.css/normalize.css'
import './_assets/globals.css'

export const metadata: Metadata = {
	title: 'Your Application Title Goes Here',
	description: 'Your application description goes here',
}

const tabs = [
	{ id: 'tab1', text: 'Main' },
	{ id: 'tab2', text: 'Quest' },
	{ id: 'tab3', text: 'Settings' },
]

export default function RootLayout({ children }: PropsWithChildren) {
	return (
		<html lang='en'>
			<body>
				<Script
					src='https://telegram.org/js/telegram-web-app.js'
					strategy='afterInteractive'
				/>
				<Root>
					{children}
					<TabMenu tabs={tabs} />
				</Root>
			</body>
		</html>
	)
}
