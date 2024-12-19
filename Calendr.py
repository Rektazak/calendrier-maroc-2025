import tkinter as tk
from tkinter import messagebox
import calendar

# Liste des jours fériés civils en 2025
jours_feries_civils = [
    (1, 1),   # Nouvel An رأس السنة الهجرية
    (11, 1),  # Manifeste de l'Indépendance
    (14, 1),  # Nouvel An Amazigh
    (1, 5),   # Fête du Travail
    (30, 7),  # Fête du Trône
    (14, 8),  # Anniversaire de la Récupération de Oued Eddahab
    (20, 8),  # Révolution du Roi et du Peuple
    (21, 8),  # Fête de la Jeunesse
    (6, 11),  # Anniversaire de la Marche Verte
    (18, 11)  # Fête de l'Indépendance
]

# Liste des jours fériés religieux en 2025
jours_feries_religieux = [
    (31, 3),  # Aïd Al Fitr
    (6, 6),   # Aïd Al Adha
    (27, 6),  # 1er Moharram
    (5, 9)    # Aïd Al Mawlid
]

# Fonction pour générer le calendrier d'un mois
def generer_calendrier(mois):
    mois_calendrier = calendar.monthcalendar(2025, mois)
    jours = []

    for semaine in mois_calendrier:
        jours.append([jour for jour in semaine if jour != 0])

    return jours

# Fonction pour afficher les jours fériés d'un mois
def afficher_jours_feries(mois):
    jours = generer_calendrier(mois)
    jours_feries = set(jours_feries_civils + jours_feries_religieux)

    fériés = []
    for semaine in jours:
        for jour in semaine:
            if (jour, mois) in jours_feries:
                fériés.append(f"{jour:2}")
            else:
                fériés.append(f" {jour:2}")

    calendrier = "\n".join(" ".join(fériés[i:i+7]) for i in range(0, len(fériés), 7))
    
    messagebox.showinfo(f"Jours fériés du mois {calendar.month_name[mois]}",
                        f"Calendrier du mois de {calendar.month_name[mois]} 2025 :\n\n{calendrier}")

# Création de la fenêtre principale
root = tk.Tk()
root.title("Calendrier 2025")

# Fonction de clic sur un mois
def clic_mois(mois):
    afficher_jours_feries(mois)

# Création de la grille des mois
mois_noms = list(calendar.month_name[1:])
for index, mois_nom in enumerate(mois_noms):
    bouton = tk.Button(root, text=mois_nom, width=20, height=2, command=lambda mois=index+1: clic_mois(mois))
    bouton.grid(row=index//3, column=index%3, padx=10, pady=10)

# Lancement de l'application
root.mainloop()
