import { GeneralSettings as GeneralSettingsLegacy } from 'components/interfaces/Organization'
import AppLayout from 'components/layouts/AppLayout/AppLayout'
import DefaultLayout from 'components/layouts/DefaultLayout'
import OrganizationLayout from 'components/layouts/OrganizationLayout'
import OrganizationSettingsLayout from 'components/layouts/ProjectLayout/OrganizationSettingsLayout'
import { Loading } from 'ui'
import { usePermissionsQuery } from 'data/permissions/permissions-query'
import { useSelectedOrganization } from 'hooks/misc/useSelectedOrganization'
import type { NextPageWithLayout } from 'types'

const OrgGeneralSettings: NextPageWithLayout = () => {
  const { isLoading: isLoadingPermissions } = usePermissionsQuery()
  const selectedOrganization = useSelectedOrganization()

  return (
    <>
      {selectedOrganization === undefined && isLoadingPermissions ? (
        <Loading />
      ) : (
        <GeneralSettingsLegacy />
      )}
    </>
  )
}

OrgGeneralSettings.getLayout = (page) => (
  <DefaultLayout>
    <OrganizationLayout>
      <OrganizationSettingsLayout>{page}</OrganizationSettingsLayout>
    </OrganizationLayout>
  </DefaultLayout>
)
export default OrgGeneralSettings
