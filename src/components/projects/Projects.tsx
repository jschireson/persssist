
import { Col, Empty, Row } from 'antd';
import { NextPage } from 'next'
import { PersssistFile } from '../../interfaces/persssist-file.interface';
import { FileCard } from './file-card';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { info } from 'node:console';


interface Props {
	files: PersssistFile[];
	info:[],
}

export const Projects: NextPage<Props> = ({ files }) => {

	if (files.length === 0) return <Empty />;

	// const { blockAddresses } = useSelector((state: RootState) => {
	// 	console.log("XXXXXXXXX");
	// 	// console.log(state.accounts);
	// 	console.log(state.blockchain.filesMetadata[0]);
	// 	const ad = state.blockchain.filesMetadata[0].address;
	// 	const up = state.blockchain.filesMetadata[0].uploader;
		
	// 	return state.blockchain
	// })

	// console.log(blockAddresses);
	// // console.log(ad);
	
	return (
		<div className='w-5/6 lg:w-4/6 m-auto max-w-5xl'>
			<Row gutter={[16, 16]}>
				{files.map((item, i) =>
				(<Col key={i} xs={12} sm={8} lg={6} >
					<FileCard file={item}></FileCard>
				</Col>))}
			</Row>
		</div>)
}