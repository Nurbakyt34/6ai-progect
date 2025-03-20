

import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import LessonCard from '../../components/lesson/LessonCard'
import { supabase } from '../../supabase'
import { useParams } from 'react-router'
import { useTranslation } from "react-i18next";


const CatalogPage = () => {
    const { t } = useTranslation();
     const { name } = useParams()
    // const { lessons } = useSelector((state) => state.lessons)
    const [lessons, setLessons] = useState([])

    const getData = async (catalogName = null) => {
        let { data } = await supabase
            .from(catalogName)
            .select('*')
        console.log(data);
        setLessons(data)
    }

    React.useEffect(() => {
        getData(name)
    }, [name])

    if (lessons?.length === 0) {
        return <h2>Loading...</h2>
    }


    return (
        <div className="flex flex-col items-center p-6">
            <h1 className="text-2xl font-bold mb-6"> 
                {t(name)}
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {lessons?.map((lesson) => (
                    <LessonCard key={lesson.id} data={lesson} />
                ))}
            </div>

        </div>
    )
}

export default CatalogPage