function findNb(m) { 
    for ( var n = 0;;n++ ) {
      
      if ( m > 0 ) {
        var currCubeVol = Math.pow( n+1, 3);
        m = m - currCubeVol;
      } else if ( m == 0 ) {
        return n;
      } else if ( m < 0 ) {
        return (-1);
      }
    }  
  }