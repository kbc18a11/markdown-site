import { useReducer, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Drawer } from '@mui/material';
import { initialState, reducer } from 'stores/MarkdownTextListStore';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';

const DisplayMarkDowntextListTitle = styled('div')({
  padding: '10px',
  backgroundColor: '#DDDDDD',
});

const DisplayMarkDowntextListItem = styled(Link)({
  margin: '15px 0 0 10px',
  textDecoration: 'none',
  ':hover': {
    textDecoration: 'none',
  },
  display: 'block',
  color: 'black',
});

export const Header = () => {
  const [isDisplaySidebar, setIsDisplaySidebar] = useState(false);

  const [markdownTextList] = useReducer(reducer, initialState);

  /**
   * サイドバーの表示の状態を変更
   */
  const changeDisplaySidebarState = () => {
    setIsDisplaySidebar(!isDisplaySidebar);
  };

  /**
   * マークダウンの名前の一覧表示
   *
   * @returns マークダウン名前の一覧
   */
  const displayMarkDowntextList = () => markdownTextList.map((markdownText) => (
    <DisplayMarkDowntextListItem
      key={markdownText.id}
      to={`markdown/${markdownText.id}`}
    >
      {markdownText.name}
    </DisplayMarkDowntextListItem>
  ));

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={changeDisplaySidebarState}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Markdonw Site
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={isDisplaySidebar} onClose={changeDisplaySidebarState}>
        <DisplayMarkDowntextListTitle>マークダウン一覧</DisplayMarkDowntextListTitle>
        <div>
          {displayMarkDowntextList()}
        </div>
      </Drawer>
    </Box>
  );
};
