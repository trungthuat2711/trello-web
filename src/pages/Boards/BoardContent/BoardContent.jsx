import Box from '@mui/material/Box'
import ListColumns from './ListColumns/ListColumns'

function BoardContent() {
  return (
    <Box sx={{
      display: 'flex',
      width: '100%',
      height: (theme) => theme.trello.boardContentHeight,
      backgroundColor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2'),
      padding: '10px 0'
    }}>
      {/* List Columns */}
      <ListColumns />
    </Box>
  )
}

export default BoardContent