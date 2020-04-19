import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import { ReactComponent as YourSvg } from '../svg/samara.svg';


const Start = ({id}) => (
	<Panel id={id}>
        <PanelHeader>Самара</PanelHeader>
	    <Group title="Navigation Example">
			<Div>
				<YourSvg/>
			</Div>
		</Group>
	</Panel>
);


export default Start;
