import React from 'react';
import { vaccineByDistrict } from '@lib/api';
import { statePaths, humanize } from '@lib/utils';
import EntityCard from '@components/EntityCard';
import Breadcumb from '@components/Breadcumb';
import { NextSeo } from 'next-seo';

export default function Vaccine({ state, district, vaccineListing }) {
    const SEO = {
        title: `Vaccine Availability in ${humanize(district)} , ${humanize(state)}`,
        description: `Covid19 Resources for Vaccine in ${humanize(district)} , ${humanize(state)}`,
        openGraph: {
            title: `Vaccine in ${humanize(district)} , ${humanize(state)}`,
            description: `Covid19 Resources for Vaccine in ${humanize(district)} , ${humanize(
                state
            )}`
        },
        additionalMetaTags: [
            {
                property: 'keywords',
                content: `covid19,india,resources,coronasafe,swasth alliance,covidfyi,${humanize(
                    district
                )},${humanize(state)},vaccine`
            }
        ]
    };
    return (
        <div>
            <NextSeo {...SEO} />
            <section className="flex flex-col ml-2 md:pt-10">
                <Breadcumb
                    list={[
                        { href: `/${state}`, name: humanize(state) },
                        { href: `/${state}/${district}`, name: humanize(district) },
                        { href: null, name: 'vaccine' }
                    ]}
                />
            </section>
            <section className="flex flex-col items-center">
                <h1 className="mt-4 font-black text-6xl text-gray-900 dark:text-gray-200 md:text-left text-center">
                    {humanize(district)}
                </h1>
                <div className="w-full mt-4 p-4 space-y-4">
                    {vaccineListing.map((v) => {
                        return (
                            <EntityCard
                                key={v.id}
                                id={v.id}
                                name={v.name}
                                company={v.companyName}
                                phone1={v.phone1}
                                phone2={v.phone2}
                                description={v.description}
                                source={v.sourceName}
                                sourceLink={v.sourceLink}
                                state={state}
                                district={district}
                                createdTime={v.createdTime}
                                verificationStatus={v.verificationStatus}
                                lastVerifiedOn={v.lastVerifiedOn}
                            />
                        );
                    })}
                </div>
            </section>
        </div>
    );
}

export async function getStaticProps({ params }) {
    console.log(vaccineByDistrict(params.state, params.district, true))
    return {
        props: {
            state: params.state,
            district: params.district,
            vaccineListing: vaccineByDistrict(params.state, params.district, true)
        }
    };
}

export async function getStaticPaths() {
    return {
        paths: statePaths('vaccine'),
        fallback: false
    };
}
