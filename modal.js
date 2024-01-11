'use strict';

// fonction responsable pour creation de modal

export const modalWindow = (score, questions) => {
  const modal = document.createElement('div');
  modal.id = 'quizModal';
  modal.className = `modal fade`;
  modal.setAttribute('tabindex', '-1');
  modal.setAttribute('aria-labelledby', 'quizModalLabel');
  modal.setAttribute('aria-hidden', 'true');

  const modalContent = document.createElement('div');
  modalContent.className = 'modal-content';

  const modalDialog = document.createElement('div');
  modalDialog.className = 'modal-dialog';
  // header
  const modalHeader = document.createElement('div');
  modalHeader.className = 'modal-header';
  const modalTitle = document.createElement('h5');
  modalTitle.className = 'modal-title';
  modalTitle.innerHTML = `Votre resultat`;
  modalHeader.appendChild(modalTitle);
  //   btn close

  const btnClose = document.createElement('button');
  btnClose.type = 'button';
  btnClose.className = 'btn-close';
  btnClose.setAttribute('data-bs-dismiss', 'modal');
  btnClose.setAttribute('aria-label', 'Close');

  modalHeader.appendChild(btnClose);
  modalContent.appendChild(modalHeader);
  //   end header

  //   modal body
  const modalBody = document.createElement('div');
  modalBody.className = 'modal-body';
  const modalBodyP = document.createElement('p');
  modalBodyP.innerHTML = `${score} bonnes reponses de ${questions} questions`;
  modalBody.appendChild(modalBodyP);
  modalContent.appendChild(modalBody);
  //  end modal body

  //   modal footer
  const modalFooter = document.createElement('div');
  modalFooter.className = 'modal-footer';
  const btnCloseFooter = document.createElement('button');
  btnCloseFooter.type = 'button';
  btnCloseFooter.className = 'btn btn-secondary';
  btnCloseFooter.setAttribute('data-bs-dismiss', 'modal');
  btnCloseFooter.setAttribute('aria-label', 'Close');
  btnCloseFooter.innerHTML = 'Fermer Fenetre';

  modalFooter.appendChild(btnCloseFooter);
  modalContent.appendChild(modalFooter);
  // end modal footer

  modalDialog.appendChild(modalContent);
  modal.appendChild(modalDialog);

  return modal;
};
