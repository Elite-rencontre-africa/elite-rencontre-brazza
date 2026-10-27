// ==========================================
// CONFIGURATION - Modifiez ces valeurs
// ==========================================
const NUMERO_PAIEMENT = "+242055835908";     // Votre numéro de paiement (affiché)
const NUMERO_WHATSAPP = "+242055835908";          // Numéro WhatsApp SANS espaces ni + (pour le lien)
// ==========================================

document.getElementById('inscriptionForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Récupération des données du formulaire
    const data = {
        nom: document.getElementById('nom').value.trim(),
        email: document.getElementById('email').value.trim(),
        telephone: document.getElementById('telephone').value.trim(),
        age: document.getElementById('age').value,
        sexe: document.getElementById('sexe').value,
        ville: document.getElementById('ville').value.trim(),
        profession: document.getElementById('profession').value.trim(),
        message: document.getElementById('message').value.trim()
    };

    // Validation simple
    if (!data.nom || !data.email || !data.telephone || !data.age || !data.sexe || !data.ville) {
        alert('Veuillez remplir tous les champs obligatoires.');
        return;
    }

    // On sauvegarde les infos localement (optionnel)
    localStorage.setItem('inscription', JSON.stringify(data));

    // Message WhatsApp avec les infos de l'inscrit
    const messageWhatsApp = encodeURIComponent(
        `Bonjour Élite Rencontre, je viens de m'inscrire.\n\n` +
        `Nom : ${data.nom}\n` +
        `Email : ${data.email}\n` +
        `Téléphone : ${data.telephone}\n` +
        `Âge : ${data.age}\n` +
        `Sexe : ${data.sexe}\n` +
        `Ville : ${data.ville}\n` +
        `Profession : ${data.profession || 'Non renseignée'}\n\n` +
        `Voici la capture de mon paiement :`
    );

    // Affichage de la page de paiement
    afficherPagePaiement(messageWhatsApp);
});

function afficherPagePaiement(messageWhatsApp) {
    const lienWhatsApp = `https://wa.me/${NUMERO_WHATSAPP}?text=${messageWhatsApp}`;

    document.body.innerHTML = `
        <div class="paiement-container">
            <header>
                <h1>AGENCE MATRIMONIALE</h1>
                <h2>ÉLITE RENCONTRE</h2>
            </header>
            <div class="paiement-body">
                <div class="icon-success">✓</div>
                <h2>Inscription enregistrée !</h2>
                <p>Pour finaliser votre inscription, veuillez effectuer le paiement
                sur le numéro ci-dessous, puis nous envoyer la capture d'écran via WhatsApp.</p>

                <div class="numero-box">
                    <div class="label">Numéro de paiement</div>
                    <div class="numero">${NUMERO_PAIEMENT}</div>
                </div>

                <a href="${lienWhatsApp}" target="_blank" class="btn-whatsapp">
                    📱 Envoyer la capture sur WhatsApp
                </a>

                <p class="info-note">
                    Après le paiement, cliquez sur le bouton ci-dessus
                    pour nous envoyer votre capture via WhatsApp.
                </p>
            </div>
            <footer>
                <p>&copy; 2025 Élite Rencontre - Tous droits réservés</p>
            </footer>
        </div>
    `;
}