  
  
  import { grey } from '@mui/material/colors';
  
  const getDesignTokens = (mode) => ({
    palette: {
      mode,
      ...(mode === 'light'
        ? {
            // palette values for light mode
         
          col:{
            main:"#fff"
          }

          }
        : {
            // palette values for dark mode
         

  col:{
    main:"64748B"
          }
          
          }),
    },
  //  neutral: {
  //    main: '#64748B',
  //    contrastText: '#fff',
  //  },
  });

   export default getDesignTokens