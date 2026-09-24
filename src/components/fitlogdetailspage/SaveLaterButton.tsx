"use client";
import { WorkOutContext } from '@/context/WorkOutProvider';
import { IFitLog } from '@/types/FitType';
import { useContext } from 'react';
import { CiBookmark } from 'react-icons/ci';

const SaveLaterButton = ({ fitlog }: { fitlog: IFitLog }) => {

    const { saveLater, setSaveLater } = useContext(WorkOutContext);

    const handleSaveLater = () => {
        console.log("save later button trigger");

        setSaveLater([...saveLater, fitlog])
    }

    return (
        <button onClick={() => handleSaveLater()} className="btn bg-black text-[#E5E7EB] text-[16px] font-semibold rounded border border-[#374151]"><CiBookmark /> Save for later</button>
    );
};

export default SaveLaterButton;