import Box from '@mui/material/Box'
import Card from './Card/Card'

function ListCards() {
  return (
    <Box sx={{
      maxHeight: (theme) => `calc(
      ${theme.trello.boardContentHeight} - 
      ${theme.spacing(5)} -
      ${theme.trello.columnHeaderHeight} - 
      ${theme.trello.columnFooterHeight}
      )`,
      '&::-webkit-scrollbar-thumb': {
        backgroundColor: '#ced0da'
      },
      '&::-webkit-scrollbar-thumb:hover': {
        backgroundColor: '#dfc2cf'
      },
      padding: '0 5px',
      margin: '0 5px',
      display: 'flex',
      flexDirection: 'column',
      gap: 1,
      overflowX: 'hidden',
      overflowY: 'auto'
    }}>
      <Card imgSrc={'https://i.ytimg.com/vi/1lzjx1X6Lt8/mqdefault.jpg'} title={'Thầy Giáo Ba'}/>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </Box>
  )
}

export default ListCards