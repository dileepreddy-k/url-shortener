import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';

import { Layout as AntLayout} from 'antd';

const Layout = (props) => {

	return (
		<AntLayout>
			<Header />
			<AntLayout>
				<AntLayout.Content>
					{props.children}
				</AntLayout.Content>
			</AntLayout>
			<Footer />
		</AntLayout>
	)
}

export default Layout