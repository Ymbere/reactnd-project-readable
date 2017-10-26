export const styles = theme => ({
 
  root: {
    maxWidth: '100%',
    padding: '0px',
    margin: theme.spacing.unit * 3,
    //
    '&:hover': {
      background: '#f9f9f9',
      transition: '.5s all',
      cursor: 'pointer',
    },
  },
  footer: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    borderBottom: '1px solid #ebebeb',
  },
  postVote: {
    width: '100%',
  },
  comments: {
    padding: '0',
  },
  commentCard: {
    borderBottom: '1px solid #ebebeb',
    '&:hover': {
      background: '#f5f8fa',
      transition: '.5s all',
      cursor: 'pointer',
    },
  },
  close: {
    position: 'absolute',
    color: '#fff',
    marginLeft: theme.spacing.unit * 3,
  }
  
})