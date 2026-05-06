import Box from '@mui/material/Box'

function BoardContent() {
  return (
    <Box sx={{
      display: 'flex',
      alignItems: 'center',
      backgroundColor: 'primary.main',
      width: '100%',
      height: (theme) => `calc(100vh - ${theme.trello.appBarHeight} - ${theme.trello.boardBarHeight})`
    }}>
      Broad Content
    </Box>
  )
}

export default BoardContent