import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import NoteAddIcon from '@mui/icons-material/NoteAdd'
import Column from './Column/Column'
import { SortableContext, horizontalListSortingStrategy } from '@dnd-kit/sortable'

function ListColumns({ columns }) {
  return (
    // SortableContext yêu cầu items là một mảng phần tử kiểu nguyên thủy.
    // Nếu không đúng thì vẫn kéo thả được nhưng không có animation.
    <SortableContext items={columns?.map(column => column._id)} strategy={horizontalListSortingStrategy}>
      <Box sx={{
        backgroundColor: 'inherit',
        width: '100%',
        height: '100%',
        display: 'flex',
        overflowX: 'auto',
        overflowY: 'hidden',
        '&::-webkit-scrollbar-track': {
          margin: 2
        }
      }}>
        {columns?.map(column => <Column key={column._id} column={column}/>)}
        {/* Add new column CTA*/}
        <Box sx={{
          minWidth: '200px',
          maxWidth: '200px',
          mx: 2,
          borderRadius: '6px',
          height: 'fit-content',
          backgroundColor: '#ffffff3d'
        }}
        >
          <Button
            startIcon={<NoteAddIcon />}
            sx={{
              width: '100%',
              color: 'white',
              justifyContent: 'flex-start',
              paddingLeft: 2.5,
              paddingY: 1,
              border: '0.5px solid',
              borderRadius: '6px'
            }}
          >
            Add new column
          </Button>
        </Box>
      </Box>
    </SortableContext>
  )
}

export default ListColumns