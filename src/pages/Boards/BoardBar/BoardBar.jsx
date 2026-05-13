import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import DashboardIcon from '@mui/icons-material/Dashboard'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import BoltIcon from '@mui/icons-material/Bolt'
import FilterListIcon from '@mui/icons-material/FilterList'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import Tooltip from '@mui/material/Tooltip'
import Button from '@mui/material/Button'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import { capitalizeFirstLetter } from '~/utils/formatters'

const MENU_STYLES = {
  color: 'white',
  backgroundColor: 'transparent',
  border: 'none',
  paddingX: '5px',
  borderRadius: '4px',
  '.MuiSvgIcon-root': {
    color: 'white'
  },
  '&:hover': {
    backgroundColor: 'primary.50'
  }
}

function BoardBar({ board }) {
  return (
    <Box sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 2,
      paddingX: 2,
      overflowX: 'auto',
      width: '100%',
      height: (theme) => theme.trello.boardBarHeight,
      backgroundColor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2')
    }}>
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 2
      }}>
        <Chip
          sx={ MENU_STYLES }
          icon={<DashboardIcon />}
          label={board?.title}
          clickable
          //onClick={() => {}}
        />
        <Chip
          sx={ MENU_STYLES }
          icon={<VpnLockIcon />}
          label={capitalizeFirstLetter(board?.type)}
          clickable
          //onClick={() => {}}
        />
        <Chip
          sx={ MENU_STYLES }
          icon={<AddToDriveIcon />}
          label="Add To Google Drive"
          clickable
          //onClick={() => {}}
        />
        <Chip
          sx={ MENU_STYLES }
          icon={<BoltIcon />}
          label="Automation"
          clickable
          //onClick={() => {}}
        />
        <Chip
          sx={ MENU_STYLES }
          icon={<FilterListIcon />}
          label="Filters"
          clickable
          //onClick={() => {}}
        />
      </Box>
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 2
      }}>
        <Button
          variant="outlined"
          startIcon={<PersonAddIcon />}
          sx={{
            color: 'white',
            borderColor: 'white',
            '&:hover': {
              borderColor: 'white'
            }
          }}
        >
          Invite
        </Button>
        <AvatarGroup
          max={4}
          sx={{
            gap: '10px',
            '& .MuiAvatar-root': {
              width: 34,
              height: 34,
              fontSize: 16,
              border: 'none',
              color: 'white',
              cursor: 'pointer',
              '&:first-of-type': {
                backgroundColor: '#a4b0be'
              }
            }
          }}
        >
          <Tooltip title="thaygiaoba">
            <Avatar
              alt="thaygiaoba"
              src="https://i.ytimg.com/vi/1lzjx1X6Lt8/mqdefault.jpg"
            />
          </Tooltip>
          <Tooltip title="thaygiaoba">
            <Avatar
              alt="thaygiaoba"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGngbvqzZIvc0AlVRA2LxRd3p5b0p98wX0_Q&s"
            />
          </Tooltip>
          <Tooltip title="thaygiaoba">
            <Avatar
              alt="thaygiaoba"
              src="https://theselfishmeme.co.uk/wp-content/uploads/2025/10/meme-thay-giao-ba-24.webp"
            />
          </Tooltip>
          <Tooltip title="thaygiaoba">
            <Avatar
              alt="thaygiaoba"
              src="https://i.ytimg.com/vi/1lzjx1X6Lt8/mqdefault.jpg"
            />
          </Tooltip>
          <Tooltip title="thaygiaoba">
            <Avatar
              alt="thaygiaoba"
              src="https://i.ytimg.com/vi/1lzjx1X6Lt8/mqdefault.jpg"
            />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  )
}

export default BoardBar