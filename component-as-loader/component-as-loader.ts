/**
 * Déplacer dans la logique d'appel backend, pas nécessairement dans le module Vuex
 * 
 * Optimiste (par défaut): Si la donnée existe dans le store Vuex, cette donnée est retournée
 *                         - Affichage des données en lecture
 * 
 * Pessimiste: Même si la donnée existe dans le store Vuex, la donnée est rechargée
 *             - Lors de l'affichage d'un formulaire pour éditer une donnée
 */
enum ModeChargement {
    OPTIMISTE = 'optimiste',
    PESSIMISTE = 'pessimiste'
}

/**
 * Nombre d'éléments à charger
 * Un : charge uniquement un élément. S'utilise conjointement avec les types `Id` et `ReponseUn<T>`
 * Plusieurs: charge une liste spécifique d'éléments. S'utilise conjointement avec les types `ListeId` et `ReponsePlusieurs<T>`
 * Tous: charge toutes les entités disponible (affichage d'une liste / tableau). S'utilise conjointement avec les types `FiltreRecherche` et `ReponseTous<T>`
 */
enum Charger {
    UN = 'un',
    PLUSIEURS = 'plusieurs',
    TOUS = 'tous'
}

/**
 * Paramètres de requête de chargement
 * 
 * Id: id unique à charger
 * ListeId: liste d'ids à charger
 * FiltreRecherche: Paramètre à appliquer à la recherche (tri, filtre de données, pagination, etc.)
 */
type Id = string;
type ListeId = Id[];
type FiltreRecherche = { [cle: string]: string };

type ChargementData = Id | ListeId | FiltreRecherche

/**
 * Réponse retournée à la suite d'une requête
 */
type ReponseUn<T> = {
    id: string,
    objet: T
};
type ReponsePlusieurs<T> = ReponseUn<T>[];
type ReponseTous<T> = {
    filtre: FiltreRecherche,
    objets: T[],
    metadonnes?: any
}

`
<p-chargement-activite-formation-async mode="optimiste" charger="un" data="a1" >
    <p-chargement-unite-async slot-scope="{idActiviteFormation, activiteFormation}" mode="optimiste" charger="un" data="activiteFormation.uniteResponsable" >
        
        <p-affichage-detail-activite-formation slot-scope={idUnite, unite} :activiteFormation="activiteFormation" :unite-responsable="unite">    
        ... logique d'affichage
        </p-affichage-detail-activite-formation>  
    
    </p-chargement-unite-async>
</p-chargement-activite-formation-async>
`