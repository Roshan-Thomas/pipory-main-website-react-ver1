import styled from 'styled-components'

export const PostContainer = styled.div`
    margin-right: 150px;
    margin-left: 150px;
    padding: 30px; 
`

export const PostTitle = styled.h1`
    font-family: 'Integral CF';
	font-weight: bold;
	font-size: 80px;

	@media screen and (max-width: 768px) {
		font-size: 60px;
	}

	@media screen and (max-width: 480px) {
		font-size: 50px;
	}
`

export const PostDetails = styled.p`
    font-weight: medium;
	font-size: 20px;
	margin-top: 10px;
	margin-bottom: 30px;
`