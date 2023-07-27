import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { ReactNode } from 'react';

type ModalProps = {
  children: ReactNode;
  show: boolean;
  title: string;
  onClose: () => void;
};

export default function Modal({
  children,
  show,
  title,
  onClose,
}: ModalProps): JSX.Element {
  return (
    <div
      className={`fixed left-0 right-0 bottom-0 top-0 bg-black bg-opacity-[.5] z-10 flex justify-center items-center ${
        !show ? 'hidden' : ''
      }`}
    >
      <div className="w-[40%] bg-white rounded-xl p-4">
        <div className="flex justify-between border-b py-2">
          <label>{title}</label>
          <button onClick={onClose}>
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>
        <div className="min-h-[70px] py-4">{children}</div>
        <div className="flex justify-end gap-4 border-t py-2">
          <button
            className="py-2 w-[100px] border gray-orange-400 rounded-lg hover:bg-gray-100 uppercase"
            onClick={onClose}
          >
            close
          </button>
          <button className="text-white bg-yellow-800 w-[100px] py-2 border border-yellow-700 rounded-lg hover:bg-yellow-900 uppercase">
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
