"use client";
import { WorkOutContext } from '@/context/WorkOutProvider';
import { IFitLog } from '@/types/FitType';
import { useContext } from 'react';
import { CiBookmark } from 'react-icons/ci';
import { toast } from 'react-toastify';

const SaveLaterButton = ({ fitlog }: { fitlog: IFitLog }) => {

    const { saveLater, setSaveLater } = useContext(WorkOutContext);

    const handleSaveLater = () => {

        const IsAdded = saveLater.find(saveId => saveId.id === fitlog.id)

        if (IsAdded) {
            toast.error(`${fitlog.name} is already added in save later`)
            return;
        }
        setSaveLater([...saveLater, fitlog])
        toast.success(`${fitlog.name} save for later`)
    }

    return (
        <button onClick={() => handleSaveLater()} className="btn bg-black text-[#E5E7EB] text-[16px] font-semibold rounded border border-[#374151]"><CiBookmark /> Save for later</button>
    );
};

export default SaveLaterButton;