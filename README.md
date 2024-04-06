# LEVEL 1

Postavljanje projekta

1. Napraviti vlastitu aplikaciju na Supabaseu - https://supabase.com/dashboard/projects
2. Populirati `.env.local` s podacima iz Supabasea (NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY)
3. Copy pasteati migracije i pokrenuti jednu po jednu u SQL editoru u Supabase-u 
4. Loginati se koristeći Supabase CLI i generirati `db-types.ts`
5. PROJECT_ID zamijeniti sa svojim project_idjem od Supabasea
### Kod za loginanje u Supabase i generiranje db-types.ts
1. `npx supabase login`
2. `npx supabase gen types typescript --project-id PROJECT_ID > db-types.ts`

# LEVEL 2

Dodati navigaciju naprijed nazad za formu

1. stvoriti hook koji će pratiti trenutni korak forme i izložiti funkcije za navigaciju naprijed i nazad
2. instancirati hook na top levelu i proslijediti handlere u formu
3. bindati handlere na buttonima za navigaciju
4. ovisno o koraku prikazati korak i opis koraka

# LEVEL 3

Dodati validacijske sheme na formu

1. koristeći `zod` složiti shemu za 3 koraka forme
2. koristeći resolver iz `react-hook-form` bindati validacijsku shemu na formu
3. nakon validacije podataka spremiti podatke u zadnjički state
4. u zadnjem koraku iskoristiti sve 3 sheme za validirati podatke prije nego se šalju igdje
5. napraviti HTTP POST request prema `/api/profile` sa podacima forme i obrisati session storage u slučaju uspješnog odgovora

# LEVEL 4

Napraviti POST rutu za unos podataka u bazu

1. parsirati dolazni JSON
2. validirati dolazni JSON
3. spremiti podatke u bazu
4. vratiti odgovor
5. u slučaju greške prikazati toast poruku
6. prikazati success screen u slučaju da sve prođe uredu
