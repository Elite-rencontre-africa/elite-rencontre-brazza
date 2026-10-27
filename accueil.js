// ==========================================
// CONFIGURATION - Modifiez ces valeurs
// ==========================================
const NUMERO_PAIEMENT = "+242055835908";      // Numéro affiché sur la page
const NUMERO_WHATSAPP = "+242055835908";           // Numéro WhatsApp SANS + ni espaces
const FRAIS_INSCRIPTION = "25 000 FCFA";          // Frais d'inscription
// ==========================================

document.getElementById('inscriptionForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const data = {
        nom: document.getElementById('nom').value.trim(),
        email: document.getElementById('email').value.trim(),
        telephone: document.getElementById('telephone').value.trim(),
        age: document.getElementById('age').value,
        sexe: document.getElementById('sexe').value,
        pays: document.getElementById('pays').value,
        ville: document.getElementById('ville').value.trim(),
        profession: document.getElementById('profession').value.trim(),
        message: document.getElementById('message').value.trim()
    };

    if (!data.nom || !data.email || !data.telephone || !data.age || !data.sexe || !data.pays || !data.ville) {
        alert('Veuillez remplir tous les champs obligatoires.');
        return;
    }

    localStorage.setItem('inscription', JSON.stringify(data));

    const messageWhatsApp = encodeURIComponent(
        `Bonjour Élite Rencontre 👋\n\n` +
        `Je viens de m'inscrire et j'ai effectué le paiement.\n\n` +
        `📋 MES INFORMATIONS :\n` +
        `━━━━━━━━━━━━━━━━━━━\n` +
        `👤 Nom : ${data.nom}\n` +
        `🎂 Âge : ${data.age} ans\n` +
        `⚥ Sexe : ${data.sexe}\n` +
        `🌍 Pays : ${data.pays}\n` +
        `🏙️ Ville : ${data.ville}\n` +
        `💼 Profession : ${data.profession || 'Non renseignée'}\n` +
        `📧 Email : ${data.email}\n` +
        `📱 Téléphone : ${data.telephone}\n` +
        `━━━━━━━━━━━━━━━━━━━\n\n` +
        `💰 Frais d'inscription : ${FRAIS_INSCRIPTION}\n\n` +
        `Voici la capture de mon paiement : 📸`
    );

    afficherPagePaiement(messageWhatsApp);
});

function afficherPagePaiement(messageWhatsApp) {
    const lienWhatsApp = `https://wa.me/${NUMERO_WHATSAPP}?text=${messageWhatsApp}`;

    document.body.innerHTML = `
        <div class="top-flags">
            <div class="flag-item">
                <span class="flag">🇨🇬</span>
                <span class="flag-label">Congo-Brazzaville</span>
            </div>
            <div class="divider-flag">✦</div>
            <div class="flag-item">
                <span class="flag">🇨🇩</span>
                <span class="flag-label">Congo-Kinshasa</span>
            </div>
        </div>

        <div class="paiement-container">
            <header>
                <div class="logo-badge">💍</div>
                <h1>AGENCE MATRIMONIALE</h1>
                <h2>ÉLITE RENCONTRE</h2>
                <p class="subtitle">L'excellence des rencontres sérieuses au Congo</p>
                <div class="header-flags">
                    <span>🇨🇬</span>
                    <span class="sep">•</span>
                    <span>🇨🇩</span>
                </div>
            </header>

            <div class="paiement-body">
                <div class="icon-success">✓</div>
                <h2>Inscription enregistrée !</h2>
                <p class="intro-text">
                    Pour finaliser votre inscription et activer votre profil,
                    veuillez effectuer le paiement des frais d'inscription ci-dessous,
                    puis nous envoyer la capture d'écran via WhatsApp.
                </p>

                <div class="frais-box">
                    <div class="frais-label">💰 Frais d'inscription</div>
                    <div class="frais-montant">${FRAIS_INSCRIPTION}</div>
                </div>

                <div class="numero-box">
                    <div class="label">📱 Numéro de paiement</div>
                    <div class="numero">${NUMERO_PAIEMENT}</div>
                    <div class="operateurs">
                        <span class="operateur-badge">Airtel Money</span>
                    </div>
                </div>

                <a href="${lienWhatsApp}" target="_blank" class="btn-whatsapp">
                    📲 Envoyer la capture sur WhatsApp
                </a>

                <p class="info-note">
                    ⚠️ <strong>Important :</strong> Après le paiement, cliquez sur le bouton
                    ci-dessus pour nous envoyer votre capture. Votre inscription sera
                    validée sous 24h.
                </p>
            </div>

            <footer>
                <p>&copy; 2025 Élite Rencontre — Agence Matrimoniale de Prestige</p>
                <p class="footer-sub">🇨🇬 Congo-Brazzaville • 🇨🇩 Congo-Kinshasa</p>
            </footer>
        </div>
    `;

    window.scrollTo(0, 0);
}