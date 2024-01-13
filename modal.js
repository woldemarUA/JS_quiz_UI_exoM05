'use strict';

// Définition de la fonction modalWindow pour créer et afficher la fenêtre modale avec le score et le nombre total de questions

export const modalWindow = (score, questions) => {
  // Création d'un élément div pour la fenêtre modale
  const modal = document.createElement('div');
  modal.id = 'quizModal';
  modal.className = `modal fade`;

  // Ajout de l'attribut tabindex pour rendre la fenêtre modale focusable
  modal.setAttribute('tabindex', '-1');
  modal.setAttribute('aria-labelledby', 'quizModalLabel');
  modal.setAttribute('aria-hidden', 'true');

  // Création d'un élément div pour le contenu de la fenêtre modale
  const modalContent = document.createElement('div');
  modalContent.className = 'modal-content';

  const modalDialog = document.createElement('div');
  modalDialog.className = 'modal-dialog';
  // Création de l'en-tête de la fenêtre modale
  const modalHeader = document.createElement('div');
  modalHeader.className = 'modal-header';

  // Création du titre de la fenêtre modale
  const modalTitle = document.createElement('h5');
  modalTitle.className = 'modal-title';
  modalTitle.innerHTML = `Votre resultat`;

  // Ajout du titre à l'en-tête de la fenêtre modale
  modalHeader.appendChild(modalTitle);

  // Création d'un bouton de fermeture de la fenêtre modale
  const btnClose = document.createElement('button');
  btnClose.type = 'button';
  btnClose.className = 'btn-close';
  btnClose.setAttribute('data-bs-dismiss', 'modal');
  btnClose.setAttribute('aria-label', 'Close');
  // Ajout du bouton de fermeture au pied de la fenêtre modale
  modalHeader.appendChild(btnClose);
  modalContent.appendChild(modalHeader);

  // Création du corps de la fenêtre modale
  const modalBody = document.createElement('div');
  modalBody.className = 'modal-body';
  const modalBodyP = document.createElement('p');
  modalBodyP.innerHTML = `${score} bonnes reponses de ${questions} questions`;
  modalBody.appendChild(modalBodyP);
  modalContent.appendChild(modalBody);
  //  end modal body

  // Création de footer de la fenêtre modale
  const modalFooter = document.createElement('div');
  modalFooter.className = 'modal-footer';
  const btnCloseFooter = document.createElement('button');
  btnCloseFooter.type = 'button';
  btnCloseFooter.className = 'btn btn-secondary';
  btnCloseFooter.setAttribute('data-bs-dismiss', 'modal');
  btnCloseFooter.setAttribute('aria-label', 'Close');
  btnCloseFooter.innerHTML = 'Fermer Fenetre';
  // Ajout de l'en-tête, du corps et du pied à la fenêtre modale
  modalFooter.appendChild(btnCloseFooter);
  modalContent.appendChild(modalFooter);
  // end modal footer

  modalDialog.appendChild(modalContent);
  modal.appendChild(modalDialog);

  return modal;
};
