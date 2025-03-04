import React from 'react'
import { supabase } from './supabase'


const App = () => {

  const getData = async () => {
    let { data: category, error } = await supabase
      .from('category')
      .select('*');


    let { data: reviews,  } = await supabase
      .from('reviews')
      .select('*')


    console.log(category);
    console.log(reviews);


  }

  React.useEffect(() => {
    getData()

  }, [])

  return (
    <div>
      fffff
    </div>
  )
}

export default App