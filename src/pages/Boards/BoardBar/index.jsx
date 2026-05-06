import Box from '@mui/material/Box'

function BoardBar() {
  return (
    <Box sx={{
      display: 'flex',
      alignItems: 'center',
      backgroundColor: 'primary.dark',
      width: '100%',
      height: (theme) => theme.trello.boardBarHeight
    }}>
      Broad Bar
    </Box>
  )
}

export default BoardBar